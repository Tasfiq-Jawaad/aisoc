"use server";

import { createClient } from "@/utils/supabase/server";

type TeamPref = "solo" | "team_2" | "team_3" | "match";

type Person = {
  full_name: string;
  student_email: string;
  diet: string | null;
  disability: string | null;
};

type SubmitResult =
  | { ok: true; team_id: number }
  | { ok: false; message: string };

type CheckinResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

function norm(v: FormDataEntryValue | null): string | null {
  const s = (v as string | null) ?? null;
  if (!s) return null;
  const t = s.trim();
  return t.length ? t : null;
}

export async function submitRegistration(
  formData: FormData
): Promise<SubmitResult> {
  try {
    const supabase = await createClient();

    const team_pref = (formData.get("team_pref") as TeamPref) || "solo";

    const primary: Person = {
      full_name: (formData.get("first_name") as string)?.trim(),
      student_email: (formData.get("first_email") as string)
        ?.trim()
        .toLowerCase(),
      diet: norm(formData.get("first_diet")),
      disability: norm(formData.get("first_disability")),
    };

    const second: Person | null =
      norm(formData.get("second_name")) || norm(formData.get("second_email"))
        ? {
            full_name: (formData.get("second_name") as string)?.trim(),
            student_email: (formData.get("second_email") as string)
              ?.trim()
              .toLowerCase(),
            diet: norm(formData.get("second_diet")),
            disability: norm(formData.get("second_disability")),
          }
        : null;

    const third: Person | null =
      norm(formData.get("third_name")) || norm(formData.get("third_email"))
        ? {
            full_name: (formData.get("third_name") as string)?.trim(),
            student_email: (formData.get("third_email") as string)
              ?.trim()
              .toLowerCase(),
            diet: norm(formData.get("third_diet")),
            disability: norm(formData.get("third_disability")),
          }
        : null;

    // Validation
    if (!primary?.full_name || !primary?.student_email) {
      return {
        ok: false,
        message: "Primary participant name and email required.",
      };
    }
    if (
      (team_pref === "team_2" || team_pref === "team_3") &&
      (!second?.full_name || !second?.student_email)
    ) {
      return {
        ok: false,
        message:
          "Team member #1 name and email are required for the selected team size.",
      };
    }
    if (
      team_pref === "team_3" &&
      (!third?.full_name || !third?.student_email)
    ) {
      return {
        ok: false,
        message: "Team member #2 name and email are required for Team of 3.",
      };
    }

    // 1) Create team with preference stored
    const { data: teamRow, error: teamErr } = await supabase
      .from("teams")
      .insert({ team_pref })
      .select("id")
      .single();

    if (teamErr || !teamRow) {
      return {
        ok: false,
        message: "Could not create team. Please try again.",
      };
    }
    const team_id = teamRow?.id as number;

    // 2) Build contestants
    const rows: Array<Person & { team_id: number }> = [{ ...primary, team_id }];
    if (team_pref === "team_2" || team_pref === "team_3") {
      if (second) rows.push({ ...second, team_id });
    }
    if (team_pref === "team_3") {
      if (third) rows.push({ ...third, team_id });
    }

    // 3) Insert contestants
    const { error: insertErr } = await supabase
      .from("contestants")
      .insert(rows);
    if (insertErr) {
      return {
        ok: false,
        message: "Could not save participants. Please try again.",
      };
    }

    return { ok: true, team_id };
  } catch (e) {
    return {
      ok: false,
      message: "Unexpected error. Please try again.",
    };
  }
}

export async function submitCheckin(
  formData: FormData
): Promise<CheckinResult> {
  try {
    const supabase = await createClient();

    const student_email = (formData.get("email") as string)
      ?.trim()
      .toLowerCase();

    // Validation
    if (!student_email) {
      return {
        ok: false,
        message: "Please enter your email.",
      };
    }

    const { data, error } = await supabase
      .from("contestants")
      .update({ checked_in: true })
      .eq("student_email", student_email)
      .select()
      .single();

    if (error || !data) {
      console.log(error);
      return {
        ok: false,
        message:
          "Could not find your email. Please make sure you enter the email you used to register.",
      };
    }

    return {
      ok: true,
      message: "You have been successfully checked in. Good luck and enjoy!",
    };
  } catch (e) {
    return {
      ok: false,
      message: "Unexpected error. Please try again.",
    };
  }
}

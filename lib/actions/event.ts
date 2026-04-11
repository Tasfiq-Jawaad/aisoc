"use server";

import { Event } from "@/types/event";
import { createClient } from "@/utils/supabase/server";

/**
 * Fetches all active upcoming events.
 * An event is considered "upcoming" if:
 * 1. Its end_date is in the future.
 * 2. It has no end_date, but its start_date is in the future.
 * 3. It has no start_date or end_date (TBA events are treated as upcoming).
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  const supabase = await createClient();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_active", true)
    .or(`end_date.gte.${now},start_date.gte.${now},start_date.is.null`)
    .order("start_date", { ascending: true }); // Show the closest upcoming events first

  if (error) {
    console.error("Error fetching upcoming events:", error.message);
    return [];
  }

  return data as Event[];
}

/**
 * Fetches all active past events.
 * An event is considered "past" if:
 * 1. Its end_date is strictly in the past.
 * 2. It has no end_date, but its start_date is strictly in the past.
 */
export async function getPastEvents(): Promise<Event[]> {
  const supabase = await createClient();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_active", true)
    .or(`end_date.lt.${now},and(end_date.is.null,start_date.lt.${now})`)
    .order("start_date", { ascending: false }); // Show the most recent past events first

  if (error) {
    console.error("Error fetching past events:", error.message);
    return [];
  }

  return data as Event[];
}

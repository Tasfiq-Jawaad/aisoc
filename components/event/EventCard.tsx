import { Pill } from "@/components/ui/Pill";
import { Event } from "@/types/event";
import { getEventSchedule } from "@/utils/helper/timestamp";
import Image from "next/image";
import Link from "next/link";

export const EventCard = ({
  event,
  isPast,
}: {
  event: Event;
  isPast: boolean;
}) => {
  const schedule = getEventSchedule(event.start_date, event.end_date);

  return (
    <article
      key={`${event.id}`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

      {/* subtle hover tint for upcoming; muted for past */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 ${
          isPast
            ? "bg-gradient-to-b from-transparent via-white/0 to-white/0"
            : "bg-gradient-to-b from-transparent via-[color:#eb5b6c1a] to-[color:#eb5b6c1a]"
        } group-hover:opacity-100`}
      />

      {/* Image */}
      <div className="relative h-40 md:h-44 w-full overflow-hidden">
        {event.image_url && (
          <Image
            src={event.image_url}
            alt={event.title}
            fill
            className={`object-contain scale-105 transition-transform duration-500 ${
              isPast ? "" : "group-hover:scale-110"
            }`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        )}
        <div className="absolute left-3 top-3">
          <Pill variant={isPast ? "neutral" : "accent"}>{event.badge}</Pill>
        </div>
        {isPast && (
          <Pill
            variant="neutral"
            className="absolute right-3 top-3 px-2 py-0.5 text-[10px] uppercase tracking-wide"
          >
            Past
          </Pill>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3
          className={`font-bold text-lg md:text-xl tracking-tight ${
            isPast ? "text-gray-200" : "text-white"
          }`}
        >
          {event.title}
        </h3>

        <div className="mt-3 flex flex-col gap-1 text-sm text-gray-300">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                isPast ? "bg-gray-400" : "[background:#eb5b6c]"
              }`}
            />
            <span>
              {schedule.dateDisplay}
              {schedule.timeDisplay && (
                <>
                  {" "}
                  <span className="text-gray-500">•</span>{" "}
                  {schedule.timeDisplay}
                </>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-80"
              aria-hidden
            >
              <path
                d="M12 2C7.03 2 3 6.03 3 11c0 6.08 8.28 11 9 11 .72 0 9-4.92 9-11 0-4.97-4.03-9-9-9zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5S13.38 13.5 12 13.5z"
                fill="currentColor"
              />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {event?.engage_url ? (
            <Link
              href={event.engage_url}
              className={`text-sm font-medium inline-flex items-center gap-2 transition ${
                isPast
                  ? "text-gray-400 hover:text-white"
                  : "[color:#eb5b6c] hover:text-white"
              }`}
            >
              Details <span aria-hidden>→</span>
            </Link>
          ) : (
            <p
              className={`text-sm font-medium inline-flex items-center gap-2 transition ${
                isPast
                  ? "text-gray-400 hover:text-white"
                  : "[color:#eb5b6c] hover:text-white"
              }`}
            >
              More details soon
            </p>
          )}
          {event?.note_url && (
            <Link
              href={event?.note_url}
              className="[color:#eb5b6c] hover:text-white text-sm font-medium inline-flex items-center gap-2"
            >
              Notes <span aria-hidden>→</span>
            </Link>
          )}
          {/* todo: rsvp option */}
          {/* {isPast ? (
                <span className="text-xs text-gray-500">Ended</span>
              ) : (
                <Link
                  href={e.url}
                  className="rounded-lg border [border-color:#eb5b6c66] [background:#eb5b6c1a] [color:#ff909c] hover:[background:#eb5b6c33] px-3 py-1.5 text-sm transition"
                >
                  RSVP
                </Link>
              )} */}
        </div>
      </div>
    </article>
  );
};

export const checkIsPastEvent = (
  startDate: string | null,
  endDate: string | null,
): boolean => {
  // If there are no dates (TBA), we generally assume it is an upcoming event
  if (!startDate && !endDate) return false;

  const now = new Date();

  // Prefer the end_date to determine if the event is entirely over.
  // If there is no end_date, fall back to the start_date.
  const referenceString = endDate || startDate;

  if (!referenceString) return false; // Safety catch

  const referenceDate = new Date(referenceString);

  // Returns true if the current time is later than the reference time
  return now > referenceDate;
};

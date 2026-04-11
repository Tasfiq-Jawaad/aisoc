import { Event } from "@/types/event";
import { EventCard } from "./EventCard";

export default function EventGrid({
  events,
  emptyText = "No events found",
  isPast = false,
}: {
  events: Event[];
  emptyText: string;
  isPast: boolean;
}) {
  if (!events?.length) {
    return <p className="text-gray-500 text-sm md:text-base">{emptyText}</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {events.map((event: Event) => {
        return <EventCard isPast={isPast} event={event} key={event.id} />;
      })}
    </div>
  );
}

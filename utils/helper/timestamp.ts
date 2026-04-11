export const getEventSchedule = (
  startString: string | null,
  endString: string | null,
) => {
  if (!startString) return { dateDisplay: "TBA", timeDisplay: "TBA" };

  const startDate = new Date(startString);

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const startFormattedDate = dateFormatter.format(startDate);

  // If there is no end date, just show the single date and start time
  if (!endString) {
    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return {
      dateDisplay: startFormattedDate,
      timeDisplay: timeFormatter.format(startDate),
    };
  }

  const endDate = new Date(endString);
  const endFormattedDate = dateFormatter.format(endDate);

  // Check if it's a multi-day event in the user's local timezone
  if (startFormattedDate !== endFormattedDate) {
    return {
      dateDisplay: `${startFormattedDate} - ${endFormattedDate}`,
      timeDisplay: null, // Multi-day: do not show time
    };
  }

  // Single-day event: show start date and time range
  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return {
    dateDisplay: startFormattedDate,
    timeDisplay: `${timeFormatter.format(startDate)}-${timeFormatter.format(endDate)}`,
  };
};

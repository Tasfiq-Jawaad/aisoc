import { UUID } from "./database";

export interface Event {
  id: UUID; // string
  created_at: string; // timestamptz
  slug: string; // for url
  title: string;
  start_date: string | null; // timestamp (without tz)
  end_date: string | null; // timestamp (without tz)
  is_active: boolean | true;
  location: string | null;
  map_url: string | null;
  badge: string | null;
  image_url: string | null;
  engage_url: string | null;
  ticket_url: string | null;
  note_url: string | null;
}

import { UUID } from "./database";

export interface Event {
  id: UUID; // string
  created_at: string; // timestamptz
  title: string | null;
  start_date: string | null; // timestamp (without tz)
  end_date: string | null; // timestamp (without tz)
  is_active: boolean | null;
  location: string | null;
  badge: string | null;
  image_url: string | null;
  engage_url: string | null;
}

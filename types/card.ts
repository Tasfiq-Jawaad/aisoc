import { Event } from "./event";

export type CardType = "event" | "project" | "blog";

export type CardProps = { type: "event"; item: Event };

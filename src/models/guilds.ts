import { Schema, model } from "mongoose";
import { Langs } from "../types";

const schema = new Schema<GuildSchema>({
  guild_id: { type: String },
  language: {
    type: Number,
    default: Langs.EN,
  },
  letter: {
    type: String,
    default: "s",
  },
  muted_role: {
    type: String,
    default: null,
  },
  membersMuted: {
    type: [String],
    default: [],
  },
  state: {
    type: Boolean,
    default: false,
  },
  start_time: {
    type: Date,
    default: null,
  },
  end_time: {
    type: Date,
    default: null,
  },
});

export default model("Guilds", schema);
export interface GuildSchema {
  guild_id: string;
  language: Langs;
  letter: string;
  muted_role: string;
  membersMuted: [string];
  state: boolean;
  start_time: Date;
  end_time: Date;
}

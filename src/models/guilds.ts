import { Schema, model } from "mongoose";

interface Guild {
  guild_id: string;
  language: string;
  letter: string;
  muted_role: string;
  membersMuted: [string];
  state: boolean;
  start_time: Date;
  end_time: Date;
}

const schema = new Schema<Guild>({
  guild_id: { type: String },
  language: {
    type: String,
    default: "EN",
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
export const GuildSchema = schema;

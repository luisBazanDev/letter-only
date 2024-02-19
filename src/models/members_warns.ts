import { Schema, model } from "mongoose";

interface MembersWarningSchema {
  guild_id: string;
  member_id: string;
  warns: [string];
}

const MembersWarning = new Schema<MembersWarningSchema>({
  guild_id: {
    type: String,
    required: true,
  },
  member_id: {
    type: String,
    required: true,
  },
  warns: {
    type: [String],
    default: [],
  },
});

export default model("MembersWarns", MembersWarning);

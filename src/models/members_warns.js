const Mongoose = require("mongoose");

const MembersWarning = new Mongoose.Schema({
  guild_id: {
    type: String,
    required: true,
  },
  member_id: {
    type: String,
    required: true,
  },
  warns: {
    type: Array,
    default: [],
  },
});

module.exports = Mongoose.model("MembersWarns", MembersWarning);

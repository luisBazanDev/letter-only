const Mongoose = require("mongoose");

const Guild = new Mongoose.Schema({
  guild_id: String,
  language: {
    type: String,
    default: 'EN'
  },
  letter: {
    type: String,
    default: 's'
  },
  muted_role: {
    type: String,
    default: null,
  },
  membersMuted: {
    type: Array,
    default: [],
  },
  state: {
    type: Boolean,
    default: false
  },
  start_time: {
    type: Date,
    default: null
  },
  end_time: {
    type: Date,
    default: null
  },
})

module.exports = Mongoose.model('Guilds', Guild)
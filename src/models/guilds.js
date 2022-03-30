const Mongoose = require("mongoose");

const Guild = new Mongoose.Schema({
  guild_id: String,
  language: {
    type: String,
    default: 'EN'
  },
  letter: String,
  muted_role: {
    type: String,
    default: null,
  },
})

module.exports = Mongoose.model('Guilds', Guild)
const { GuildMember } = require("discord.js");
const MemberWarns = require("../models/members_warns");
const langs = {
  ES: require("../languages/ES.json"),
  EN: require("../languages/EN.json"),
};

module.exports = {
  name: "messageCreate",
  run: async (client, msg) => {
    if (msg.author.id == client.user.id && msg.type == 'DEFAULT') {
      setTimeout(() => {
        msg.delete();
      }, 1000 * 5);
      return;
    }
    if (msg.author.bot || msg.type != 'DEFAULT') return;
    const guildDb = await client.resolveGuildDb(msg.guild.id);
    if(!guildDb.state) return;
    const lang = langs[guildDb.language || "EN"];
    const content = msg.content.toLowerCase();

    if (content == guildDb.letter.toLowerCase()) return;

    msg.delete();
    if (msg.member.permissions.has("ADMINISTRATOR")) return;
    const warns = await warnUser(msg.guild.id, msg.member);
    if (!warns) {
      msg.channel.send(
        lang.timeout
          .replace("%member%", `<@${msg.member.id}>`)
          .replace("%time%", "`" + process.env.TIMEOUT + "`")
      );
      return;
    }
    msg.channel.send(
      lang.warning
        .replace("%member%", `<@${msg.member.id}>`)
        .replace("%letter%", guildDb.letter)
        .replace("%warns%", "`" + warns + "/3`")
    );
  },
};

async function resolveMemberWarns(guild_id, member_id) {
  let memberWarnsDb = await MemberWarns.findOne({
    guild_id,
    member_id,
  });
  if (!memberWarnsDb) {
    memberWarnsDb = new MemberWarns({
      guild_id,
      member_id,
      warns: [],
    });
    await memberWarnsDb.save();
  }
  return memberWarnsDb;
}
async function warnUser(guild_id, member) {
  const memberWarnsDb = await resolveMemberWarns(guild_id, member.id);
  if (memberWarnsDb.warns.length >= 3) {
    memberWarnsDb.warns = [];
    member.timeout(1000 * process.env.TIMEOUT, "3 warns");
    await memberWarnsDb.save();
    return false;
  }
  memberWarnsDb.warns.push(new Date());
  await memberWarnsDb.save();
  return memberWarnsDb.warns.length;
}
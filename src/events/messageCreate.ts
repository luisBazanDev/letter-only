import { GuildMember, Message } from "discord.js";
import { Bot, Lang, Langs } from "../types";

const MemberWarns = require("../models/members_warns");
import { ES, EN } from "../languages";
import { TIMEOUT } from "../Config";
const langs = {
  1: ES,
  2: EN,
};

export default {
  name: "messageCreate",
  run: async (client: Bot, msg: Message) => {
    if (!client.resolveGuildDb) return;
    if (msg.author.id == client.user?.id && msg.type == "DEFAULT") {
      setTimeout(() => {
        msg.delete();
      }, 1000 * 5);
      return;
    }
    if (msg.author.bot || msg.type != "DEFAULT") return;
    if (!msg.guild?.id) return;
    const guildDb = await client.resolveGuildDb(msg.guild.id);
    if (!guildDb.state) return;
    const lang: Lang = langs[guildDb.language] ?? EN;
    const content = msg.content.toLowerCase();

    if (compareMsgLetter(content.toLowerCase(), guildDb.letter.toLowerCase()))
      return;

    msg.delete();
    if (!msg.member) return;
    if (msg.member.permissions.has("ADMINISTRATOR")) return;
    const warns = await warnUser(msg.guild.id, msg.member);
    if (!warns) {
      msg.channel.send(
        lang.timeout
          .replace("%member%", `<@${msg.member.id}>`)
          .replace("%time%", "`" + TIMEOUT + "`")
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

async function resolveMemberWarns(guild_id: string, member_id: string) {
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
async function warnUser(guild_id: string, member: GuildMember) {
  const memberWarnsDb = await resolveMemberWarns(guild_id, member.id);
  if (memberWarnsDb.warns.length >= 3) {
    memberWarnsDb.warns = [];
    member.timeout(1000 * TIMEOUT, "3 warns");
    await memberWarnsDb.save();
    return false;
  }
  memberWarnsDb.warns.push(new Date());
  await memberWarnsDb.save();
  return memberWarnsDb.warns.length;
}

function compareMsgLetter(msg: string, letter: string) {
  let length = msg.length;
  if (length > 1) {
    let prediction = "";
    for (let i = 0; i < length; i++) {
      prediction += letter;
    }
    if (prediction == msg) return true;
  } else {
    if (msg == letter) return true;
  }
}

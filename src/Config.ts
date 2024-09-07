import { config } from "dotenv";

config();

export const MONGO_URI = process.env.MONGO_URI ?? "";
export const TOKEN = process.env.TOKEN ?? "";
export const TIMEOUT = 300; // Seconds
export const BOT_PERMISSIONS: bigint = BigInt(1099578764288); // https://discord.com/developers/docs/topics/permissions
export const BOT_NAME = "Letter Only";
export const INVITE_SUPPORT = "https://discord.gg/UhBaxpFv6f";
export const INVITE_URL =
  "https://discord.com/api/oauth2/authorize?client_id=958181869646663740&permissions=1099578764288&scope=bot%20applications.commands";
export const SOURCE_URL = "https://github.com/luisBazanDev/letter-only";

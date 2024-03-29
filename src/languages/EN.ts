import { Lang } from "../types";

export const EN: Lang = {
  warning: "%member%. Only one letter %letter%, please %warns%",
  timeout: "%member%. You have been timed out for %time% seconds",
  commands: {
    dont_permission: "You don't have permission to use this command.",
    disabled: "System disabled.",
    enabled: "System enabled for `%duration%`",
    info: {
      title: "Bot Information",
      description:
        "Letter Only is a discord bot for april fools day and other fun stuff",
      img: "https://i.imgur.com/YRWHoVW.jpg",
      creator: {
        title: "Creator and my god",
        value: "`Luis Bazán` 🙈",
      },
      created: {
        title: "When I was created?",
        value: "`03/22` 🪄",
      },
      support: {
        title: "Support server?",
        value: "[Click Here 🤙](",
      },
      invite: {
        title: "Invite me to your server?",
        value: "[Click Here 😽](",
      },
      source: {
        title: "Source code?",
        value: "[My heart 💖](",
      },
    },
    invite: {
      title: "Invite me to your server?",
      value: "[Click Here 😽](",
    },
    ping: {
      title: "🏓 Ping with the Discord API",
    },
    language: "🌐 Change the language ",
    letter: {
      error: {
        p1: "📝 You can only use letters in this command",
        p2: "is incorrect",
      },
      success: {
        p1: "You have successfully changed the letter to ",
        p2: "🚪🔑",
      },
    },
  },
};

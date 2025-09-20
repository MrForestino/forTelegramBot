import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8434812242:AAHMguh1lLiH2kiuARLUKwTrCdM__oGlDfM";
const CHANNEL_ID = "@tgchanel_fortest"; // username або id каналу
const bot = new TelegramBot(TOKEN, { polling: false });

bot.sendMessage(CHANNEL_ID, "🎉 Розіграш! Натисни кнопку, щоб взяти участь:", {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Взяти участь ✅",
          web_app: { url: "https://mrforestino.github.io/forTelegramBot/" } // твій сайт/MiniApp
        }
      ]
    ]
  }
});

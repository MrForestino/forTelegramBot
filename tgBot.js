import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8434812242:AAHMguh1lLiH2kiuARLUKwTrCdM__oGlDfM";
const CHANNEL_ID = "@tgchanel_fortest";
const bot = new TelegramBot(TOKEN, { polling: false });

bot.sendMessage(
  CHANNEL_ID,
  "🎉 Розіграш! Натисни кнопку, щоб взяти участь:",
  {
    reply_markup: {
      inline_keyboard: [
        [
          {
						text: "Взяти участь ✅", 
						callback_data: "participate" 
            // text: "Взяти участь ✅",
            // url: encodeURI("https://mrforestino.github.io/forTelegramBot/")
          }
        ]
      ]
    }
  }
);
bot.on("callback_query", (query) => {
  const userId = query.from.id;
  const username = query.from.username;
  const firstName = query.from.first_name;

  console.log("User clicked:", userId, username, firstName);

  // можна надіслати підтвердження
  bot.answerCallbackQuery(query.id, { text: "Ви зареєстровані!" });
});

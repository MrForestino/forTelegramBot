import TelegramBot from "node-telegram-bot-api";

const TOKEN = "тут_твій_API_TOKEN";
const CHANNEL_ID = "@tgchanel_fortest"; // username або id каналу
const bot = new TelegramBot(TOKEN, { polling: false });

// Надсилаємо повідомлення у канал
bot.sendMessage(
  CHANNEL_ID,
  "🎉 Розіграш! Натисни кнопку, щоб взяти участь:",
  {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Взяти участь ✅",
            url: "https://mrforestino.github.io/forTelegramBot/" // твій сайт/MiniApp
          }
        ]
      ]
    }
  }
);

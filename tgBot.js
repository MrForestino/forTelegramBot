import TelegramBot from "node-telegram-bot-api";
import { supabase } from "./supabase.js";

const TOKEN = "8434812242:AAHMguh1lLiH2kiuARLUKwTrCdM__oGlDfM";
const CHANNEL_ID = "@tgchanel_fortest";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.sendMessage(
  CHANNEL_ID,
  "🎉 Розіграш! Натисни кнопку, щоб взяти участь:",
  {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Взяти участь ✅", callback_data: "participate" }]
      ]
    }
  }
);

bot.on("callback_query", async (query) => {
  const user = query.from;

  // Запис у Supabase
  const { error } = await supabase.from("contest_users").insert([{
    telegram_id: user.id,
    telegram_name: user.username || `${user.first_name} ${user.last_name || ""}`
  }]);

  if (error) {
    console.error(error);
  }

  bot.answerCallbackQuery(query.id, { text: "✅ Ви зареєстровані!" });
});
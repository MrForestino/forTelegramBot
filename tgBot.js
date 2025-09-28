import TelegramBot from "node-telegram-bot-api";
import { supabase } from "./supabase.js";
import express from "express";


const app = express();
const PORT = process.env.PORT || 3000;

const TOKEN = process.env.BOT_TOKEN;


// const CHANNEL_ID = "@tgchanel_fortest";@Ideya68
const CHANNEL_ID = "@Ideya68";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.sendMessage(
  CHANNEL_ID,
  "🎉 Розыгрыш! Нажми кнопку, чтобы принять участие:",
  {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Принять участие ✅", callback_data: "participate" }]
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

  bot.answerCallbackQuery(query.id, { text: "✅Вы зарегистрированы!" });
});

app.get("/", (req, res) => {
  res.send("✅ Telegram bot is running on Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
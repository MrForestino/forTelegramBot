import { supabase } from "./supabase.js";

// Отримуємо об’єкт Telegram WebApp
const tg = window.Telegram.WebApp;

// Розширюємо вікно (щоб кнопка гарно вміщалась)
tg.expand();

document.getElementById("joinBtn").addEventListener("click", async () => {
  // Дані користувача з Telegram
  const user = tg.initDataUnsafe.user;

  if (!user) {
    alert("Не вдалося отримати дані користувача");
    return;
  }

  const telegram_id = user.id;
  const telegram_name = user.username || `${user.first_name} ${user.last_name || ""}`;

  // Запис у Supabase
  const { error } = await supabase
    .from("contest_users")
    .insert([{ telegram_id, telegram_name }]);

  if (error) {
    console.error(error);
    alert("Помилка при записі у базу!");
  } else {
    alert("✅ Ви успішно приєдналися до розіграшу!");
  }
});

// const { Telegraf } = require("telegraf");
// const bot = new Telegraf(process.env.1718982079:AAFPf4Ri9hdjH4n9lk8Eege2PZaUN5XVGSM); //сюда помещается токен, который дал botFather
// bot.start((ctx) => ctx.reply("Welcome")); //ответ бота на команду /start
// bot.help((ctx) => ctx.reply("Send me a sticker")); //ответ бота на команду /help
// bot.on("sticker", (ctx) => ctx.reply("")); //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
// bot.hears("hi", (ctx) => ctx.reply("Hey there")); // bot.hears это обработчик конкретного текста, данном случае это - "hi"
// bot.launch(); // запуск бота

const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "1718982079:AAFPf4Ri9hdjH4n9lk8Eege2PZaUN5XVGSM";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(
    chatId,
    "Извини, я пока только учусь и ничего ответить не могу"
  );
});

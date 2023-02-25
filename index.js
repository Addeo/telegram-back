const TelegramBot = require('node-telegram-bot-api');


const webAppUrl = 'https://ya.ru';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await  bot.sendMessage(chatId, 'Received your message', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'заполнить форму', web_app: {url: webAppUrl}}]
                ]
            },
            reply_markup: {
                keyboard: [
                    [{text: 'заполнить форму', web_app: {url: webAppUrl}}]
                ]
            }
        });
    }

});

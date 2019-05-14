const TelegramBot = require('node-telegram-bot-api')
const Agent = require('socks5-https-client/lib/Agent')
const config = require('./fileWorker')
const mystorage = require('./storage.js')

const TOKEN = config.get('token')
const bot = new TelegramBot(TOKEN, {
  polling: true,
})

bot.on('message', (msg) => {
  const userId = msg.from.id
  mystorage.checkStatus(userId)
})

bot.onText(/\/userlist/, () => {
  console.log('ok')
})
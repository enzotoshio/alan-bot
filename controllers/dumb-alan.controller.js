const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class DumbAlanController extends TelegramBaseController {
    handle($) {
        $.sendMessage('Nem sei que poha é essa, mas deve ser uma bosta mesmo!');
    }
}

module.exports = DumbAlanController;

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class OpinionController extends TelegramBaseController {
    handle() {
        $.sendMessage(`${$.query.subject} é uma bosta!`);
    }

    get routes() {
        return {
            'opinion': 'handle'
        }
    }
}

module.exports = OpinionController;

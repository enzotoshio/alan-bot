const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class StopController extends TelegramBaseController {
    constructor(channel) {
        super();
        this.channel = channel;
    }

    handle($) {
      clearInterval(this.channel.interval);

      $.sendMessage(`Falow galera!`);
    }
}

module.exports = StopController;

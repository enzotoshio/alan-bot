const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const curses = require('../feed/curses');

class OpinionController extends TelegramBaseController {
    handle($) {
        let randomCursePosition = Math.floor((Math.random() * curses.frases.length - 1));

        if (!$.query.subject) {
          $.sendMessage(`Poha, você quer minha opinião no que?`);
        } else {
          $.sendMessage(`${$.query.subject} ${curses.frases[randomCursePosition]}`);
        }
    }
}

module.exports = OpinionController;

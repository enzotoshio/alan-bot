const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const curses = require('../feed/curses');

class OpinionController extends TelegramBaseController {
    handle($) {
        let randomCursePosition = Math.floor((Math.random() * (curses.frases.length - 1)));

        if (!$.query.subject) {
          $.sendMessage(`Poha, você quer minha opinião no que?`);
        } else {
          let subject = $.query.subject;
          const isNameRef = subject.match(/\@|\#/gm);

          if (!isNameRef) {
            subject = subject.match(/([A-Z]?[a-z]+)|([A-Z]+(?![a-z]))/gm)
              .join(' ')
              .toLowerCase();
          }

          $.sendMessage(`${subject} ${curses.frases[randomCursePosition]}`);
        }
    }
}

module.exports = OpinionController;

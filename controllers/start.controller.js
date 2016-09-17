const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const request = require('request');
const curses = require('../feed/curses');

class StartController extends TelegramBaseController {
    constructor(channel) {
        super();
        this.channel = channel;
    }

    handle($) {
        let games = [];

        $.sendMessage(`Eae seus bostas, o melhor programador do mundo acabou de entrar!`);

        request.get('http://api.steampowered.com/ISteamApps/GetAppList/v0001/', (error, response, body) => {
            let parsedResp = JSON.parse(body);

            games = parsedResp.applist.apps.app;
        })

        this.channel.interval = setInterval(()=> {
            let randomGamePosition = Math.floor((Math.random() * (games.length - 1)));
            let randomCursePosition = Math.floor((Math.random() * (curses.frases.length - 1)));
            let game = games[randomGamePosition].name;
            let curse = curses.frases[randomCursePosition];

            $.sendMessage(`Nossa cara, ${game} ${curse}`);
        }, 7200000);
    }
}

module.exports = StartController;

'use strict'

const Telegram = require('telegram-node-bot');
const OpinionController = require('./controllers/opinion.controller');
const DumbAlanController = require('./controllers/dumb-alan.controller');

const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram('273431119:AAEhnEY5n-IEPS7cl_TPQcAlH18Jo0jHE70');

tg.router
    .when('/opinion :subject', new OpinionController())
    .otherwise(new DumbAlanController())

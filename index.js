'use strict'

const Telegram = require('telegram-node-bot');
const OpinionController = require('./controllers/opinion.controller');
const DumbAlanController = require('./controllers/dumb-alan.controller');
const StartController = require('./controllers/start.controller');
const StopController = require('./controllers/stop.controller');
const request = require('request');
const http = require('http');
const Router = require('node-router');

const token = '273431119:AAEhnEY5n-IEPS7cl_TPQcAlH18Jo0jHE70';
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram(token);
const router = Router();    // create a new Router instance
const route = router.push;  // shortcut for router.push()

let server;
let channel = {};

route(routeHandler);

server = http.createServer(router).listen(8080);  // launch the server

function routeHandler(req, res, next) {
  res.send('Hello!');
}

// setInterval(() => {
//
// }, 1740000);

tg.router
    .when('/start', new StartController(channel))
    .when('/stop', new StopController(channel))
    .when('/quieto', new StopController(channel))
    .when('/opinion :subject', new OpinionController())
    .otherwise(new DumbAlanController())

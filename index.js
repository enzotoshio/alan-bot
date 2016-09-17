'use strict'

const Telegram = require('telegram-node-bot');
const OpinionController = require('./controllers/opinion.controller');
const DumbAlanController = require('./controllers/dumb-alan.controller');
const StartController = require('./controllers/start.controller');
const StopController = require('./controllers/stop.controller');
const request = require('request');
var express = require('express');
var app = express();

const token = '273431119:AAEhnEY5n-IEPS7cl_TPQcAlH18Jo0jHE70';
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram(token);
const port = process.env.PORT || 8080;

let channel = {};

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// setInterval(() => {
//     request.get()
// }, 1740000);

tg.router
    .when('/start', new StartController(channel))
    .when('/stop', new StopController(channel))
    .when('/quieto', new StopController(channel))
    .when('/opinion :subject', new OpinionController())
    .otherwise(new DumbAlanController())

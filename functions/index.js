const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use('/v1', app);
main.use(bodyParser.json());

app.get('/warmup', (request, response) => {

    response.send('Warming up friend.');

});

exports.api = functions
                .region('asia-northeast1')
                .https.onRequest(main);
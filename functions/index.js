const functions = require('firebase-functions');
const firebaseHelper = require('firebase-functions-helper');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
const app = express();
const main = express();

main.use('/v1', app);
main.use(bodyParser.json());
main.use(cors({ origin: true }));

const tasksCollection = 'tasks';



// For a ping-test of sorts:
app.get('/warmup', (request, response) => {
    response.json({ message: 'Warming up friend.'});
});



app.get('/tasks', (request, response) => {
    firebaseHelper.firestore
        .backup(db, tasksCollection)
        .then(data => response.set({ 'Access-Control-Allow-Origin': '*' }).status(200).send(data))
        .catch(error => response.set({ 'Access-Control-Allow-Origin': '*' }).status(400).send(`Cannot get tasks: ${error}`));
});


exports.api = functions
                .region('asia-northeast1')
                .https.onRequest(main);
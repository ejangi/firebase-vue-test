const functions = require('firebase-functions');
const firebaseHelper = require('firebase-functions-helper');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

admin.initializeApp(functions.config().firebase);

const whitelist = [ process.env.CORS_WHITELIST ];
const corsConfig = {
    origin: function (origin, callback) {
        if (whitelist.indexOf('*') !== -1 || whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Origin [' + origin + '] — Not allowed by CORS'))
        }
    }
}

let db = admin.firestore();
const app = express();
const main = express();

app.use(cors(corsConfig));
main.use('/v1', app);
main.use(bodyParser.json());
main.use(cors(corsConfig));

const tasksCollection = 'tasks';



// For a ping-test of sorts:
app.get('/warmup', (request, response) => {
    response.json({ message: 'Warming up friend.'});
});



app.get('/tasks', (request, response) => {
    // Following the example from: https://itnext.io/building-a-serverless-restful-api-with-cloud-functions-firestore-and-express-f917a305d4e6
    firebaseHelper.firestore
        .backup(db, tasksCollection)
        .then(data => response.status(200).send(data))
        .catch(error => response.status(400).send(`Cannot get tasks: ${error}`));
});



app.patch('/tasks/:key/complete', async (request, response) => {
    const result = await firebaseHelper.firestore
        .updateDocument(db, tasksCollection, request.params.key, { 
            complete: true
        });
    response.status(204).send({ saved: result });
});


exports.api = functions
                .region(process.env.FUNCTIONS_REGION)
                .https.onRequest(main);
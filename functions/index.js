const functions = require('firebase-functions');
const express = require('express');
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const app = express();
app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
});
 
exports.app = functions.https.onRequest(app);

app.get('/timestamp-cached', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.send(`${Date.now()}`);
});
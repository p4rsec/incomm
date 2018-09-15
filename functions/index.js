const functions = require('firebase-functions');
const express = require('express');
var firebase = require('firebase');
var firebaseui = require('firebaseui');
var Request = require("request");

const app = express();
app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
});
 
exports.app = functions.https.onRequest(app);

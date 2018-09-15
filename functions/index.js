const functions = require('firebase-functions');
const express = require('express');
var Request = require("request");

const app = express();
app.get('/paybills', (request) => {
    Request.post({
        "headers": { "x-api-key": "gFUPpwE5bUWcr0VQyB8z", "content-type": "application/json" },
        "url": "https://us-central1-incomm-hackathon-api.cloudfunctions.net/api/accounts/c92PIlyaYXQbR27iXNqi/transactions",
        "body": JSON.stringify({
            "counterParty": "thepowersthatbe",
            "type": "debit",
            "description": "Bill Collection from The Powers that Be",
            "amount": 210000
        
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });
    });

    exports.app = functions.https.onRequest(app);
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');


const { SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.use(express.json());

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
    })
);

app.listen(SERVER_PORT, () => console.log(`Server up on port ${SERVER_PORT}`));
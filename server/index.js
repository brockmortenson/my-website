require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');


const { SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
    })
);

app.listen(SERVER_PORT, () => console.log(`Server up on port ${SERVER_PORT}`));
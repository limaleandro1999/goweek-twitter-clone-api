const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost/goweek', {useNewUrlParser: true});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
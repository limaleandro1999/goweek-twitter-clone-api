const express = require('express');
const routes = express.Router();
const TweetController = require('./controllers/TweetController');
const LikesController = require('./controllers/LikeControllers');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikesController.store);

module.exports = routes;


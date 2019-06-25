const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routers = new express.Router();
const upload = multer(uploadConfig);

routers.get('/posts', PostController.index);
routers.get('/posts/:id/like', LikeController.like);
routers.post('/posts', upload.single('image'), PostController.store);

module.exports = routers;

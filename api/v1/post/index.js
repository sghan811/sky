const express = require('express')
const passport = require('../utils/auth/local')
const send = require('../utils/send')

const {
    create,
    index
} = require('./controller')
const {
    post_upload,
    index_load
} = require('./middlewares')
const postRouter = express.Router();

postRouter.post('/upload', post_upload, create, send);
postRouter.get('/', index_load, index, send)

module.exports = postRouter
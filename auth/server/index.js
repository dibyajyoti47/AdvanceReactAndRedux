//main point, where application starts

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require("./router");
const mongoose = require("mongoose");


//db setup
mongoose.connect("mongodb://localhost:27017/auth_react", { useNewUrlParser: true });


//App setup
app.use(morgan('combined'));
app.use(bodyParser.json( { type: '*/*'}));
router(app);




//setup setup
const port = process.env.PORT || 3090;
const server = http.createServer(app)
server.listen(port);
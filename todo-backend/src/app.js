const express = require('express');
const app=express();
const cors= require("cors")
// bodyParser = require('body-parser');
const router=require('./list/list.router')


// const router = require('express').Router();

const dotenv= require('dotenv');
const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());
app.use('/list', router);


module.exports=app;
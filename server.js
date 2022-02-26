require('dotenv').config()
const express = require('express');
const database = require('mime-db');
const mongoose = require('mongoose')
const data = require('./routes/data')
const app = express();

app.use(express.json())
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.on('connected',()=>{
    console.log("db connected")
})

app.use('/data',data)

app.listen(3000,()=>{
    console.log("server is running in port 3000")
})
const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser')
const postRoute = require('./routes/postlibrary')

app.use(bodyParser.json())
mongoose.connect(process.env.URL, 
{useNewUrlParser: true, useUnifiedTopology: true}, ()=>console.log('mongodb connected'));

app.use('/postlibrary', postRoute)


//START
const PORT = 5000;
app.listen(PORT, ()=> console.log(`server started ${PORT}`))


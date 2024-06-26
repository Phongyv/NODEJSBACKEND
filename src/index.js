const express = require('express')
const app = express()
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const route = require('./routes/index')
require('dotenv').config()


app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views',path.join(__dirname,'resources/views'))

route(app);

const db = require('./mongodb')

app.listen(3000,()=>{
    console.log('App listenning on port 3000!')
    db('sample_weatherdata')
})


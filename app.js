require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const conn_url = 'mongodb+srv://' + process.env.TODO_DB_USER + ':' + process.env.TODO_DB_PASSWORD + '@' + process.env.TODO_DB_CLUSTER +'/' + process.env.TODO_DB_NAME

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(conn_url, {useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open', () => {
    console.log('connected to the ToDo database...')
})

app.use(express.json())

const todoRouter = require('./routes/todos')
app.use('/',todoRouter)

app.listen(3000, () => {
    console.log('Server started')
})
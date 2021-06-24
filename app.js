const express = require('express');
const studentRoute = require('./api/routes/student')
const contactRoute = require('./api/routes/contact')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

mongoose.connect('mongodb+srv://new-project:project123@projectcluster.yc86d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connection.on('error', error => {
    console.log('connection faild ?')
})

mongoose.connection.on('connected', connected => {
    console.log('connection success')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/student', studentRoute)
app.use('/contact', contactRoute)
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "working app node with express with local"
//     })
// })

app.use((req, res, next) => {
    res.status(404).json({
        message: "url not found check again!"
    })
})

module.exports = app;
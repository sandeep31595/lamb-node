const express = require('express');
const mongoose = require("mongoose")
const router = express.Router();
const Contact = require('../model/contact')

router.post('/', (req, res, next) => {
    console.log('body', req.body)
    let contact = new Contact({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        mobile_no: req.body.mobile_no,
    })
    contact.save().then(result => {
        console.log(result);
        res.status(200).json({ data: result })
    })
        .catch(err => {
            console.log('err', err);
            res.status(500).json({ message: "somthing wrong try again!!" })
        })
})

module.exports = router
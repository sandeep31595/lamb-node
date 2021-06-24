const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "get url working good now"
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body)
})

module.exports = router
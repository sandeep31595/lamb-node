const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    mobile_no: Number,
})

module.exports = mongoose.model('Contact', contactSchema)
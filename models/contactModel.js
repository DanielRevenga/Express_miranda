const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
    first_name: {
        type: String,
        default: null,
        required: true
    },
    last_name: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        default: null,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    subject: {
        type: String,
        default: null
    },
    comment: {
        type: String,
        default: null,
        required: true
    },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
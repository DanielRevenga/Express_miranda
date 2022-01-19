const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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
    description: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        deafult: null
    },
    status: {
        type: String,
        enum: ["active", "inactive"]
    },
    image: {
        type: String,
        default: null
    },
    job: {
        type: String,
        default: null
    },
    start_date:{
       type: Date,
       default: null
    },
    end_date:{
       type: Date,
       default: null
    },
    phone: {
        type: String,
        deafult: null
    } 
});

const User = mongoose.model("User2", userSchema);
module.exports = User;
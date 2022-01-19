const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
    number: {
        type: Number,
        default: 0,
        required: true
    },
    amenities: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    offer_price: {
        type: Number,
        default: 0,
        required: true
    },
    status: {
        type: String,
        enum: ["occupied", "not occupied"]
    },
    image: {
        type: String,
        default: null
    },
    room_type_type: {
        type: String,
        default: null,
        required: true
    },
    room_type_number: {
        type: Number,
        default: null,
        required: true
    },
    
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
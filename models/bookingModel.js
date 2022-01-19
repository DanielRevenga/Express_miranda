const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
    user_id: {
        type: String,
        default: null,
        required: true
    },
    room_id: {
        type: String,
        default: null,
        required: true
    },
    order_date: {
        type: Date,
        default: () => new Date()
    },
    check_in: {
        type: Date,
        default: null
    },
    check_out: {
        type: Date,
        default: null
    },
    special_request: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["check in", "check out", "in progress"]
    }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
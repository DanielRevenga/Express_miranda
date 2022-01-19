let mongoose = require("mongoose");

dbConnection = async () => {

    try {
        await mongoose.connect("mongodb+srv://snake:1234@cluster0.cfo5h.mongodb.net/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to database.");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;
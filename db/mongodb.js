let mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        // await mongoose.connect("mongodb+srv://snake:1234@cluster0.cfo5h.mongodb.net/test", {
        await mongoose.connect(process.env.DB_CN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to database.");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;
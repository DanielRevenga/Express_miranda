
const mongoose = require("mongoose");

const Booking = require("./models/bookingModel");
const Room = require("./models/roomModel");
const Contact = require("./models/contactModel");
const User = require("./models/userModel");
// @ts-ignore
const bookings_data = require("./data/bookings_data.tsx");
// @ts-ignore
const rooms_data = require("./data/rooms_data.tsx");
// @ts-ignore
const contacts_data = require("./data/contacts_data.tsx");
// @ts-ignore
const users_data = require("./data/users_data.tsx");

mongoose.connect(`mongodb+srv://snake:1234@cluster0.cfo5h.mongodb.net/Miranda?retryWrites=true&w=majority`,
{
	useNewUrlParser: true,
	useUnifiedTopology: true
}), () => {
	console.log("Mongoose Is Connected");
};

// ROOMS
const rooms_seed = async () => {
    console.log("ROOMS SEED START");
    try {
        // DELETE ROOMS
        await Room.deleteMany({});

        // INSERT ROOMS
        for(let el of rooms_data) {
            let room = new Room(el);
            await room.save()
                .then(response => {}) 
                .catch(error => console.log("ROOM"+error));
        }
    } catch (error) {
        console.log({error: "ROOM"+error});
    }
    console.log("ROOMS SEED START");
}

// INSERT USERS
const users_seed = async () => {
    console.log("USERS SEED START");
    try {
        // DELETE USERS
        await User.deleteMany({});

        // INSERT USERS
        for(let el of users_data) {
            let users = new User(el);
            await users.save()
                .then(response => {}) 
                .catch(error => console.log("USER"+error));
        }
    } catch (error) {
        console.log({error: "USER"+error});
    }
    console.log("USERS SEED END");
}

// CONTACTS
const contacts_seed = async () => {
    console.log("CONTACTS SEED START");
    try {
        // DELETE CONTACTS
        await Contact.deleteMany({});

        // INSERT CONTACTS
        for(let el of contacts_data) {
            let contacts = new Contact(el);
            await contacts.save()
                .then(response => {}) 
                .catch(error => console.log("CONCTACT"+error));
        }
    } catch (error) {
        console.log({error: "CONCTACT"+error});
    }
    console.log("CONTACTS SEED END");
}




// BOOKINGS
const bookings_seed = async () => {
    console.log("BOOKINGS SEED START");
    try {
        // DELETE BOOKINGS
        await Booking.deleteMany({});

        // INSERT BOOKINGS
        for(let el of bookings_data) {
            
            await Room.countDocuments({}, (err, numDocs) => {
                let rand = Math.floor(Math.random() * numDocs);
                Room.findOne().skip(rand).exec(async(err, result) => {
                    if (result) el.room_id = result._id;

                    await User.countDocuments({}, (err, numDocs) => {
                        let rand = Math.floor(Math.random() * numDocs);
                        User.findOne().skip(rand).exec(async(err, result2) => {
                            
                            if (result2) el.user_id = result2._id;
                            const booking = new Booking(el);

                            await booking.save()
                                .then(response => {}) 
                                .catch(error => console.log("BOOKING"+error));  
                        });
                    })
                  
                });               
            })
              
            
        }
    } catch (error) {
        console.log({error: "BOOKING"+error});
    }
    console.log("BOOKINGS SEED END");
}

const execute_seeds = async () => {
    await rooms_seed();
    await contacts_seed();
    await users_seed();
    await bookings_seed();
    
    // mongoose.connection.close();
}

execute_seeds();





const createError = require('http-errors');
const mongoose = require("mongoose");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")
const logger = require('morgan');
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const cors = require("cors");
const passport = require("passport");
require('dotenv').config();

const indexRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const dashboardRoute = require("./routes/dashboard.js");
const secureRoute = require('./routes/secure-routes');
const UserModel = require("./models/user");
const { get } = require('http');

const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// ======================================= MY FIRST DB =======================================
// mongoose.connect(`mongodb+srv://${process.env.DB_CN_USERNAME}:${process.env.DB_CN_PASSWORD}@cluster0.cfo5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
// {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }), () => {
// 	console.log("Mongoose Is Connected");
// };
// ======================================= MIRANDA DB =======================================
mongoose.connect(`mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASS }@cluster0.cfo5h.mongodb.net/${ process.env.DB_MAIN_COLLECTION }?retryWrites=true&w=majority`,
{
	useNewUrlParser: true,
	useUnifiedTopology: true
}), () => {
	console.log("Mongoose Is Connected");
};
require("./auth/auth");
// mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	}), () => {
// 		console.log("Mongoose Is Connected");
// 	};
// mongoose.set("useCreateIndex", true);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
// mongoose.connection.on("error", error => console.log(error));
// mongoose.Promise = global.Promise;s

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ------------------------- Middlewares START -------------------------
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	next();
});
// app.use(cors({
// 	origin: "http://localhost:3000", // location of the app where connecting to
// 	credentials: true
// }));
// app.use(expressSession({
// 	secret: "1234",
// 	resave: true,
// 	saveUninitialized: true
// }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/auth", authRouter);
app.use("/dashboard",  dashboardRoute);
// app.use("/dashboard", passport.authenticate("jwt", { session:false }), dashboardRoute);
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// app.use(passport.initialize());
// app.use(passport.session());
// require("./passportConfig")(passport);
// ------------------------- Middlewares END -------------------------

// ------------------------- Routes -------------------------
// app.post("/login", (req, res, next) => {
// 	passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//         if (!user) res.send("User or Password are wrong");
//         else {
//             req.logIn(user, err => {
//                 if (err) throw err;
//                 res.send("Successfully Authenticated");
//                 console.log(req.user);
//             });
//         } 
//     })(req, res, next);
// });
// app.post("/register", (req, res) => {
// 	User.findOne({username: req.body.username}, async(err, doc) => {
// 		if (err) throw err;
// 		if (doc) res.send("User Already Exists");
// 		if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);
// 			const newUser = new User({
// 				username: req.body.username,
//                 password: hashedPassword
// 			});
//             await newUser.save();
//             res.send("User Created");
// 		}
// 	});
// });
// app.get("/user", (req, res) => {
// 	console.log("ererererere",req.user);
	
//     res.send(req.user); // The req.user stores the entire user, we can use in all our app
// });

// app.get("/testAuth", passport.authenticate("local", {
// 	successRedirect: "/dashboard/bookings",
// 	failureRedirect: "/dashboard",
// }));
// ------------------------- Routes END -------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

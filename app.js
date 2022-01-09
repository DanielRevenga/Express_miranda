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
const passportlocal = require("passport-local").Strategy;

const indexRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const dashboardRoute = require("./routes/dashboard.js")
const User = require("./schemas/user");

const app = express();

mongoose.connect("mongodb+srv://snake:1234@cluster0.cfo5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}), () => {
		console.log("Mongoose Is Connedted");
	};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ------------------------- Middlewares START -------------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
	origin: "http://localhost:3000", // location of the app where connecting to
	credentials: true
}));
app.use(expressSession({
	secret: "1234",
	resave: true,
	saveUninitialized: true
}));
app.use(cookieParser("1234"));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/dashboard", dashboardRoute);

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
// ------------------------- Middlewares END -------------------------

// ------------------------- Routes -------------------------
app.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("User or Password are wrong");
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        } 
    })(req, res, next);
});
app.post("/register", (req, res) => {
	User.findOne({username: req.body.username}, async(err, doc) => {
		if (err) throw err;
		if (doc) res.send("User Already Exists");
		if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
			const newUser = new User({
				username: req.body.username,
                password: hashedPassword
			});
            await newUser.save();
            res.send("User Created");
		}
	});
});
app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user, we can use in all our app
});
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

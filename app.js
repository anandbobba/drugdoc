const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const pug = require('pug');
const userRouter = require('./routes/userRouter');
const flash = require('connect-flash');
require("dotenv").config();
const expressSession = require('express-session');
const mongoose = require("./config/mongoose.connection");

mongoose.set('bufferCommands', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if we want flash messages to work we have to use express-session
app.use (expressSession({
  resave: false,  //this is used to save the session for the user who comes to our website and does something and then leaves the website and then comes back to the website then we want to save the session for that user so we use resave:false
   saveUninitialized:false,  //if theres a guy who comes to our website and he doesnt do anything  and he leaves the website then we dont want to save the session for that guy  so we use saveUninitialized:false 
  secret: process.env.EXPRESS_SESSION_SECRET,
}));
app.use(flash()); //flash is used to show messages to the user  like if he has logged in successfully or not  or if he has registered successfully or not or if he has added something to the cart or not and if redirected to the login page then it will show the message that you have to login to access this page
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Open http://localhost:3000 to access the application');
    });
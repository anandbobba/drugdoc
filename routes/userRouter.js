const express = require('express');
const router = express.Router();
const {registerUser}= require('../controllers/authController');
const {loginUser}= require('../controllers/authController');
router.get('/', function(req, res)  {
    res.send('Hello from user router');
});

router.get('/register', function(req, res) {
    res.render('register',{
    success_messages: req.flash('success') || [], // If no messages, default to empty array
     error_messages: req.flash('error') || [] // If no messages, default to empty array
    });
});
router.post('/register', registerUser);

router.get('/login', function(req, res) {
    res.render('login' ,{
    success_messages: req.flash('success') || [], // If no messages, default to empty array
    error_messages: req.flash('error') || [] // If no messages, default to empty array
   });
});
router.post("/login",loginUser);

module.exports = router;

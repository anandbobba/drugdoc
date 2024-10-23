const userModel = require('../models/user-model');
const flash = require('connect-flash');


module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body; // Destructure incoming request body
        // this to check if hes already having an accont

    let user = await userModel.findOne({email:email});
    if(user) {
        req.flash('error', 'User already exists');
        return res.status(400).send({message: 'User already exists'});
    }

    // Assuming user creation logic here
    let newUser = new userModel({ fullname, email, password });
    await newUser.save();
    req.flash('success', 'User created successfully');
    return res.redirect('/users/login'); 
} catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
}
}


module.exports.loginUser = async function(req,res) {
    let {email,password} = req.body;


    // This is to check that user provided email and password
    let user = await userModel.findOne({ email: email });
    if (!user) {
        req.flash('error', 'Invalid email or password');
        return res.status(400).send({ message: 'Invalid email or password' }); // This is for if user is not found
    }
    if (user.password !== password) {
        req.flash('error', 'Invalid email or password');
        return res.status(400).send({ message: 'Invalid email or password' }); // This is for if password is incorrect
    }

    // Assuming user login logic here
    req.flash('success', 'Login successful');
    res.status(200).send({ message: 'Login successful' });
}

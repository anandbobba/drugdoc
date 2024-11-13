const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Auth = require('./models/auth-db');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoD
mongoose.connect('mongodb://127.0.0.1:27017/auth-db');

app.post('/signin', (req, res) => {
    Auth.findOne
    ({ email
    : req.body.email, password: req.body.password })
    .then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.json({ message: 'Invalid credentials' });
        }
    })
    .catch((err) => {
        res.json(err);
    });
}
);

app.post('/', (req, res) => {
Auth.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    }); 
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
    });
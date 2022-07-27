const router = require('express').Router();
const User = require('../models/User');

//Register
router.post('/register', (req, res) => {

    const { username, email, password } = req.body;
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    const user = newUser.save();
    user.save()
        .then(() => res.json({ message: 'User created!' }))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));
});
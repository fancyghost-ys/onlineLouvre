const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/app')

exports.signUp = async (req, res) => {
    const user = await new User(req.body);
    await user.save((error, user) => {
        if (error) {
            return res.status(404).json({ error: 'User already exist, please choose a new one' });
        }
        user.salted = undefined;
        user.hashed_password = undefined;
        res.json({ user })
    })
}

exports.signIn = async (req, res) => {
    const { userName, password } = req.body;
    await User.findOne({ userName }).then((user) => {
        if (!user) {
            return res.status(404).json({
                error: 'Couldn\'t find your account, check UserName'
            });
        }
        if (!user.authenicate(password)) {
            return res.status(404).json({
                error: 'Incorrect Password check your password again'
            });
        }
        const token = jwt.sign({ _id: user._id, role: user.role }, config.JwtSecret);
        res.cookie('token', token, { expiresIn: '1d' })
        const { _id, userName, role } = user;
        return res.status(200).json({ token, user: { _id, userName, role } })
    }).
        catch((error) => {
            return res.status(403).json({ message: error.message })
        })
}

exports.signOut = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'You Sigout!!' })
}
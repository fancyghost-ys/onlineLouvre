const mongoose = require('mongoose')
const crypto = require('crypto');
const uuidv1 = require('uuidv1')

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        userPhoneNumber: {
            type: Number,
        },
        role: {
            type: Number,
            default: 1
            // 2 for guest and 1 for museum worker
        },
        salt: String
    }, { timestamps: true }
);

userSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    })


userSchema.methods = {
    authenicate: function (plainText) {
        console.log(plainText);
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    encryptPassword: function (password) {
        if (!password) return ' ';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return ' ';
        }
    }
};


module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate( value ) {
            if( !validator.isEmail( value )) {
                throw new Error( 'Email is invalid' )
            }
        }
    },
    password: {
        type: String,
        minLength: 7,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if( value.toLowerCase().includes(password)) {
                throw new Error('password musn\'t contain password')
            }
        }
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', user)

module.exports = User

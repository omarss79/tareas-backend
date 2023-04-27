const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor, teclea un nombre']
    },
    email: {
        type: String,
        required: [true, 'Por favor, teclea un email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor, teclea un password']
    },
})

module.exports = mongoose.model('user', userSchema)


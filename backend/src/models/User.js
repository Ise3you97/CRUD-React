const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    Timestamp: true
});

module.exports = model('User', userSchema);
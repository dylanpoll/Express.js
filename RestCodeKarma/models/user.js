const mongoose = require('mongoose');


//schema
const UsersSchema = mongoose.Schema({
    name: {
            type: String,
        required: true
    },
    email: {
            type: String,
        required: true
    },
    karma: {
            type: Number,
        required: true
    },
    idtoken: {
            type: Number,
        required: true
    },
    roles: {
            type: String,
        required: true
    },
    questHistory: {
            type: String,
        required: true
    },
    projectHistory: {
            type: String,
        required: true
    },
    skills: {
            type: String,
        required: true
    },
    discordID: {
            type: Number,
        required: true
    },
    level: {
            type: String,
        required: true
    },
    streak: {
            type: Number,
    required: true
    },
    password: {
            type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UsersSchema);

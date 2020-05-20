const mongoose = require('mongoose');


//schema
const PostSchema = mongoose.Schema({
    info: {
            type: String,
        required: true
    },
});

module.exports = mongoose.model('Posts', PostSchema);

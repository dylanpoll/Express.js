const mongoose = require('mongoose');
//JSON body schema
const PostSchema = mongoose.Schema({
    title: {
            type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Posts', PostSchema);

const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ref'
    },

    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ref'
        }
    }]
})

const PostCollection = mongoose.model('Post', PostSchema)

module.exports = PostCollection
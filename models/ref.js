const mongoose = require("mongoose")

const refSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const refCollection = mongoose.model("Ref", refSchema)

module.exports = refCollection
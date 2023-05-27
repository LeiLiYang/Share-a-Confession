const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const confessionSchema = new Schema({
    title: {
        type: String,
        maxlength: 35,
        required: true
    },
    confession: {
        type: String,
        maxlength: 400,
        required: true,
    },
    anonymousPost: Boolean,
    date: Date,
})
const Confession = mongoose.model("Confession", confessionSchema);

module.exports = Confession;
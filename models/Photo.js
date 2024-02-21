const mongoose = require("mongoose");
const { Shema } = mongoose;

const photoSchema = new Schema(
    {
        Image: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: mongoose.ObjectId,
        userName: String,
    },
    {
        timestamps: true
    }
);

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo;
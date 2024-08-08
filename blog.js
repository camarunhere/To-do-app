const mongoose = require('mongoose');
const Schema   = mongoose.Schema; //Schema is the thing that is going to define the structure of the documents that we are going to later store inside a collection.And it's a thing that a model wraps around

const blogSchema = new Schema
//({
//     title: {
//         type: String,
//         required: true
//     },
//     subject: {
//         type: String,
//         required: true
//     },
//     body: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true }); //Schema is the thing that defines the structure of our documents the model is the thing that surrounds that and then provides us with an interface by which to communicate with a database collection for that document type

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
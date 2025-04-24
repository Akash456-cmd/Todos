const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Admin:OfZyLfdTGqfkHdDX@cluster0.wc9ou5w.mongodb.net/todos")
const todoSchema = mongoose.Schema({
   
        title: String,
        description: String,
        completed: Boolean
   
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
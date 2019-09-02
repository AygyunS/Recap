var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {type: String, default: 'hahaha'},
    completed: {
        type: Boolean,
        default: false
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

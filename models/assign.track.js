const mongoose = require('mongoose');

//Assignment Tracker Schema; title, description and due date for assignment must be inputted 
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);

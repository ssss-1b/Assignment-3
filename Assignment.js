const mongoose = require('mongoose');

/* Defines assignment tracker input and their requirements
All fields are required to be filled */

const assignmentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;

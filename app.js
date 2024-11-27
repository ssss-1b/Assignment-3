const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();


mongoose.connect('mongodb+srv://sbiju:UEXrNb1ukW1KNcfY@cluster0.nxvlj.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const assignmentRoutes = require('./routes/assignments.js');
app.use('/assignments', assignmentRoutes);

app.get('/', (req, res) => {
  res.render('tracker/index'); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
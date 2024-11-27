const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

/*CREATE form for new assignment, form submission 
and save assignment to database*/
router.get('/new', (req, res) => {
  res.render('tracker/index'); 
});


router.post('/', async (req, res) => {
  try {
    const newAssignment = new Assignment({
      name: req.body.name,
      description: req.body.description,
      dueDate: req.body.dueDate
    });

    await newAssignment.save();
    res.redirect('/assignments'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving assignment');
  }
});

/*READ - displays assignment tracker list and enables editing*/
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.render('tracker/list', { assignments }); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching assignments');
  }
});

router.get('/:id/edit', async (req, res) => {
    try {
      const assignment = await Assignment.findById(req.params.id);
      res.render('tracker/edit', { assignment });
    } catch (err) {
      console.error(err);
      res.redirect('/assignments');
    }
  });
  
/*UPDATE - enables updating an assignment entry*/
  router.put('/:id', async (req, res) => {
    try {
      const { name, description, dueDate } = req.body;
      await Assignment.findByIdAndUpdate(req.params.id, { name, description, dueDate });
      res.redirect('/assignments');
    } catch (err) {
      console.error(err);
      res.redirect('/assignments');
    }
  });

/*DELETE - to delete assignment*/
  router.delete('/:id', async (req, res) => {
    try {
      await Assignment.findByIdAndDelete(req.params.id);
      res.redirect('/assignments');
    } catch (err) {
      console.error(err);
      res.redirect('/assignments');
    }
  });

module.exports = router;

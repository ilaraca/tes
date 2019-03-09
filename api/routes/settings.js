// routes/settings.js

const express = require('express');
const mongoose = require('mongoose');

const settingsRoutes = express.Router();

// require the user model !!!!
const User = require('../models/User.js');


// PUT route => to update a specific user
settingsRoutes.put('/edit/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `User with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = settingsRoutes;

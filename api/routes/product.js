// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Product = require('../models/Product');

// GET route => to get all the products
router.get('/all', (req, res, next) => {
  Product.find()
    // .populate('tasks')
    .then((allTheProducts) => {
      res.json(allTheProducts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST route => to create a new product
router.post('/add', (req, res, next) => {
  Product.create({
    name: req.body.name,
    decription: req.body.decription,
    imgPath: req.body.imgPath
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route => to get a specific product/detailed view
router.get('/detail/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  // our projects have array of tasks' ids and
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  Product.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route => to update a specific product
router.put('/edit/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Product with ${req.params.id} is updated successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

// DELETE route => to delete a specific product
router.delete('/delete/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Product.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Product with ${req.params.id} is removed successfully.` });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

'use strict';

let express = require('express');
let router = express.Router();
let models = require('./../models');
let User = models.User;
let sequelize = models.sequelize;

let onIndex = (req, res) => {
  User.findAll()
    .then(users => {
      res.render('welcome/index', { users });
    })
    .catch(e => res.status(500).send(e.stack));
};

router.get('/', onIndex);

router.get('/users', onIndex);

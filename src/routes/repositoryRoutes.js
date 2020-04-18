const express = require('express');

const repositoryController = require('../controllers/repositoryController');

const router = express.Router();

router.post('/repository/create', repositoryController.createRepository);
router.get('/repository/', repositoryController.listAllRepositories);

module.exports = router;

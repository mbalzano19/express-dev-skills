const express = require('express');
const router = express.Router();
// need to make variable in order to import the index function
const skillController = require('../controllers/skills')
// URL in browser to point to localhost:3000/todo
// GET request localhost:3000/todo
router.get('', skillController.index)

// GET request localhost:3000/todos/125223
// Since this is a GET request we need to get the user `id` somehow. This how is with a url param
// We can name `:id` whatever we want just as long as we then refer to it as what we named it
// req.params.id
router.get('/:id', skillController.show)


module.exports = router

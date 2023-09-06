const express = require('express');
const blogController = require('../controllers/blogController');

// create a new instance of express router object
const router = express.Router();

// configure routes
router.get('/', blogController.blog_index);

router.get('/create', blogController.blog_create_get);

router.post('/', blogController.blog_create_post);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;
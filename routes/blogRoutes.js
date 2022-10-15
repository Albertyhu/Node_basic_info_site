const express = require('express');
const router = express.Router(); 
const blogController = require('../controller/blogController')

router.get('/', blogController.blogPage);

router.get('/:id', blogController.blogArticle); 

router.post('/', blogController.postBlog); 

module.exports = router; 
const express = require('express');
const { postValidation } = require('../../validations');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { postController } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth('getPosts'), validate(postValidation.getPosts), postController.getPosts);

router
    .route('/add')
    .post(auth('managePosts'), validate(postValidation.createPost), postController.createPost);

router
    .route('/:postId')
    .get(auth('getPosts'), validate(postValidation.getPost), postController.getPost)
    .delete(auth('managePosts'), validate(postValidation.deletePost), postController.deletePost)
    .patch(auth('managePosts'), validate(postValidation.updatePost), postController.updatePost);



module.exports = router;
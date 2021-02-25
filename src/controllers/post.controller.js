const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { postService } = require('../services');
const { status } = require('../config/enums');

const createPost = catchAsync(async (req, res) => {
    const post = await postService.createPost({
        ...req.body,
        user: req.user.id,
    });
    res.status(httpStatus.CREATED).send(post);
});

const updatePost = catchAsync(async (req, res) => {
    const post = await postService.updatePostById(req.params.postId, req.body);
    res.send(post);
});

const deletePost = catchAsync(async (req, res) => {
    await postService.deletePostById(req.params.postId);
    res.status(httpStatus.NO_CONTENT).send();
});

const getPost = catchAsync(async (req, res) => {
    const post = {
        "post": await postService.getPostById(req.params.postId),
        "user": req.user,
    };

    if (!post) {
        throw new ApiError(httpStatus.NOT_FOUND, 'post not found');
    }

    res.send(post);
});

const getPosts = catchAsync(async (req, res) => {
    const filter = { 'status': status.ENABLE }
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await postService.queryPosts(filter, options);
    res.send(result);
});

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPosts,
}
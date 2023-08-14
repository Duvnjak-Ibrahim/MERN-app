const asyncHandler = require("express-async-handler")
const Post = require("../models/postModel.js")
// @desc Get all Posts
// @route GET /api/posts
const getPosts = asyncHandler( async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})
// @desc Post New Post
// @route POST /api/posts
const postPost = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {username,photo,text} = req.body;
    if(!username || !photo || !text){
        res.status(400);
     throw new Error("all fields are mandatory")
    }
    const contact = await Post.create({
        username,
        photo,
        text,
        
    })
    res.status(201).json(contact)
})


module.exports = {
    getPosts,
    postPost,
}

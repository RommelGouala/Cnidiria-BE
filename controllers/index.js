// const Post = require('../models/post')

async function getAllPosts(req, res){
    try {
        // const posts = await Post.find()
        //res.send(posts)
        res.send("All Posts endpoint")
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all posts'})
    }
}

async function getOnePost(req, res){
    try {
        const { id } = req.params
        //const post = await Post.findById(id)
        //res.send(post)
        res.send("One Posts endpoint for id " + id)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting post by ID'})
    }
}

async function addPost(req, res){
    try {
        // const { title, desc, date, timeframe, location, jobtype, budget, postowner } = req.body
        // const post = await new Post({
        //     ...req.body
        // }).save()

        // res.status(201).json({ 'message': 'Post successfully created'})
        res.send("added one post")
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error adding post'})
    }
}

async function deletePost(req, res){
    try {
        const { id } = req.params
        // const post = await Post.findByIdAndDelete(id)
        // res.json({"message": `Post id ${id} had been deleted.`})
        res.send("delete one post with id " + id)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error deleting post'})
    }
}

module.exports = {
    getAllPosts,
    getOnePost,
    addPost,
    deletePost
}
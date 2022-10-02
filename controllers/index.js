const pgp = require('pg-promise')

const connection = {
    host: 'localhost',
    port: 5432,
    database: 'Cnidiria',
    user: 'postgres',
    password: 'postgres'
};

const db = pgp(connection)

async function getAllPosts(req, res){
    try {
        //db call
        res.send("All Posts endpoint")
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all posts'})
    }
}

async function getOnePost(req, res){
    try {
        const { id } = req.params
        //db call
        res.send("One Posts endpoint for id " + id)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting post by ID'})
    }
}

async function addPost(req, res){
    try {
        db.
        res.send("add one post")
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error adding post'})
    }
}

async function deletePost(req, res){
    try {
        const { id } = req.params
        //db call
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
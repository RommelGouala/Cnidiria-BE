const router = require('express').Router()
const { getAllPosts, getOnePost, addPost, deletePost } = require('../controllers/index')

router.get('/', (req, res) => {
    res.send("Test Home page")
})

router.get('/all', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', addPost)
router.delete('/:id', deletePost)

module.exports = router
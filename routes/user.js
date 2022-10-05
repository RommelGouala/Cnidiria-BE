const router = require('express').Router()
const { getAllUsers, getOneUser, addUser, deleteUser, loginUser } = require('../controllers/user')

router.get('/', (req, res) => {
    res.send("Test User page")
})

router.get('/all', getAllUsers)
router.get('/:id', getOneUser)
router.post('/login', loginUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)

module.exports = router
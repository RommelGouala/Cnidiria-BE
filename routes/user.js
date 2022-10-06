const router = require('express').Router()
const { getAllUsers, getOneUser, addUser, deleteUser, loginUser } = require('../controllers/user')

const { validateJWT } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.send("Test User page")
})

router.get('/all', getAllUsers)
router.get('/:id', validateJWT, getOneUser)
router.post('/login', validateJWT, loginUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)

module.exports = router
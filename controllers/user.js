const User = require('../models/user')

async function getAllUsers(req, res){
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all users'})
    }
}

async function getOneUser(req, res){
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting user by ID'})
    }
}

async function addUser(req, res){
    console.log(req.body)
    try {
        const { name, password, role, email, phone, posts } = req.body
        const user = await new User({
            ...req.body
        }).save()

        res.status(201).json({ 'message': 'user successfully created'})
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error adding user'})
    }
}

async function deleteUser(req, res){
    try {
        const { id } = req.params
        const post = await User.findByIdAndDelete(id)
        res.json({"message": `User id ${id} had been deleted.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error deleting post'})
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    deleteUser
}
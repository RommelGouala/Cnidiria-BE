const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Test Home page")
})

module.exports = router
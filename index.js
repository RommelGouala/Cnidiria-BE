const express = require('express')
const cors = require('cors')
require('dotenv').config()

const mainRoutes = require('./routes/index')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/index', mainRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Live and localwide at port: ${PORT}`))
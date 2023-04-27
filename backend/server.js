const { application } = require('express')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

// Con estas lineas son para recibir datos de formularios
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server iniciado en el puerto: ${port}`))


const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./src/database/config');
require('dotenv').config();

// Create an Express Server
const app = express()

// base de datos 
dbConnection()
app.use(cors())

//Directorio publico
app.use(express.static('public'))
// lectura y parser del body
app.use(express.json())
//endpoints
app.use('/api/auth', require('./src/routes/auth'))

// TODO: crud: eventos

 


// Listening peticions

app.listen(process.env.PORT, () => {

    console.log(`Server Running on PORT: ${process.env.PORT}`)
})


















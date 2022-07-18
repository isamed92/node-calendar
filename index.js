

const express = require('express');
require('dotenv').config();

// Create an Express Server
const app = express()


//Directorio publico
app.use(express.static('public'))
// lectura y parser del body
app.use(express.json())
//endpoints
app.use('/api/auth', require('./routes/auth'))

// TODO: crud: eventos

 


// Listening peticions

app.listen(process.env.PORT, () => {

    console.log(`Server Running on PORT: ${process.env.PORT}`)
})


















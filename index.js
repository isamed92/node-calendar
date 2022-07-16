

const express = require('express');


// Create an Express Server

const app = express()

//endpoints 

app.get('/', (req, res) => {

    res.json({
        ok: true
    })

})


// Listening peticions

app.listen(4200, () => {

    console.log(`Server Running on PORT: ${4200}`)
})


















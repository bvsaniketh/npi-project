const express = require('express')
require('./db/mongoose')

const categoryRouter = require('./routers/category')

const app = express()
const port = process.env.PORT


// Parse Incoming JSON To An Object
app.use(express.json())
app.use(categoryRouter)

app.listen(port, () => {
    console.log('Server is up on port ', port);
})
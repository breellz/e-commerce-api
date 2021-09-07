const express = require('express')
const User = require('./models/user')
require('./db/mongoose')

const port = process.env.PORT

const app = express()



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('server listening on port ' + port)
})
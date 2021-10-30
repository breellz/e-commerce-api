const express = require('express')
const userRouter = require('./routers/user')
const itemRouter =require('./routers/item')
require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)


app.listen(port, () => {
    console.log('server listening on port ' + port)
})
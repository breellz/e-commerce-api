const express = require('express')
const userRouter = require('./routers/user')
require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log('server listening on port ' + port)
})
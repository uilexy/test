const express = require('express')
const app = express()
const router = require('./router/indexRouter')
const port = 3000

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
    console.log('app ada di 3000');
})
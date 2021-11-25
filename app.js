// Importing Express Framework
const express = require('express')

require('dotenv/config')

// Importing MongoDB Package
const mongoose = require('mongoose')

const app = express()
const port = 3000

const auth = require('./routes/auth')
const user = require('./routes/user')
const project = require('./routes/project')

app.use('/auth', auth)
app.use('/user', user)
app.use('/project', project)

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {
        console.log('DB is connected!');
    }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Importing Express Framework
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('auth api')
})

module.exports = router
// Importing Express Framework
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('project api')
})

module.exports = router
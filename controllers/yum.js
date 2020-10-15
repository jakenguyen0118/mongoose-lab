const express = require('express')
const router = express.Router()
const restaurants = require('../db/seedData.json')

router.get('/', (req, res) => {
    res.json({
        status: 200,
        restaurants: restaurants
    })
})

router.post('/', (req, res) => {
    
})

module.exports = router
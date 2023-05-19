const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/products', (req, res) => {
    res.json(products)
})

app.listen(5400, () => {
    console.log('Server is on...')
})
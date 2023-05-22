const express = require('express')
const app = express()
const { products } = require('./data')


app.get('/', (req, res) => {
    res.send('<h1>This is home page</h1>')
})

app.get('/api/v1/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// let productId = '12'
app.get('/api/products/:productId', (req, res) => {
    console.log(req.params)
    const { productId } = req.params
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        res.status(404).send('Product not found')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/products/query', (req, res) => {
    // console.log(req.query)
    const { search } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = products.filter((product) => { return product.name.startsWith(search) })
        res.status(200).json(sortedProducts)
    }
    else if (sortedProducts.length < 1) {
        // return res.status(404).send('No product found')
        res.status(200).json({ success: true, data: [] })
    }
    // res.status(200).json(sortedProducts)
})


app.listen(5400, () => {
    console.log('Server is on 5400....')
})
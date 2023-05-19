const express = require('express')
const app = express()

// Create, Read, Update and Delete

// console.log('app', app)

app.get('/', (req, res) => {
    console.log('Client hit the resourse')
    res.status(200)
    res.send('This is Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})


app.get('*', (req, res) => {
    res.status(404).send('<h1>Page Not found</h1>')
})

app.listen(5400, () => {
    console.log('Server is on...')
})
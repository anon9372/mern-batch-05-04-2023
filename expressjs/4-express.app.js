const express = require('express')
const path = require('path')

const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.get('*', (req, res) => {
    res.status(404).send('<h1>Page Not found</h1>')
})

app.listen(5400, () => {
    console.log('Server is on...')
})
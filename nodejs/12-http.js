// it is one of the core modules in node js
// express js is built on top of this http module
// used to create server

//import
const http = require('http')

// Create
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to home page')
    }
    else if (req.url === '/about') {
        res.end('Welcome to about page')
    }

    else {
        res.end(
            `<h1>Oops! Content not found!</h1>`
        )
    }
})

// start
server.listen(5500)


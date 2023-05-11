const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is home page')
    }
    else if (req.url === '/about') {
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('This is about page')
    }
    res.end('Error Page')
})

server.listen(5500, () => {
    console.log('Server is running')
})
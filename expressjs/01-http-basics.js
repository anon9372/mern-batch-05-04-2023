const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    }

    if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        return res.end()
    }

    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found!</h1>')
        res.end()
    }

})

server.listen(5600, () => {
    console.log('Server is running')
})
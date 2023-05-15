const { createReadStream } = require('fs')

// by default it is 64kb



const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })

stream.on('data', (result) => {
    console.log('result', result)
})

stream.on('error', (err) => console.log(err))

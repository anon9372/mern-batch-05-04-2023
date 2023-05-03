const { readFile, writeFile } = require('fs')

console.log('Start')

readFile('./content/first.txt', 'utf-8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }

    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {

        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile('./content/result-async.txt', `Here is the async result: ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log('Done with the task!')
        })
    })
})

console.log('Starting the next task!!')
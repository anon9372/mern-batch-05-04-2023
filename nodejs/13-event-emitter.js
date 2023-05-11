const EventEmitter = require('events')


const customEmitter = new EventEmitter()


// event.on and event.emit


customEmitter.on('response', (name, id) => {
    console.log(`Response from ${name} with id ${id}`)
})

customEmitter.on('response', () => {
    console.log('Some other logic is emitted')
})


customEmitter.emit('response', 'AIT', 22)
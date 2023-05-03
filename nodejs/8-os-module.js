const os = require('os')

// console.log('os', os)

// info about current user
const user = os.userInfo()
console.log('user', user)

// to check the uptime

console.log(`The Systems uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log('currentOS', currentOS)
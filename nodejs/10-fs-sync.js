const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log('hello first', first)
console.log('hello second', second)

writeFileSync('./content/result-sync.txt', `Here is the result ${first} and ${second}`, { flag: 'a' })


console.log('Done with the task of reading and writing the files')
console.log('Starting the next tasK')
const path = require('path')

// console.log('path', path.sep) 

const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log('filePath', filePath)

const base = path.basename(filePath)
console.log('base', base)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('absolutePath', absolutePath)
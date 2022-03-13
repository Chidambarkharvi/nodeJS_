const path = require('path')
const filePath = path.parse(__filename)
console.log(filePath)

//root of the filePath

console.log(filePath.root)
//Name of the filePath

console.log(filePath.name)
//Extension of the filePath

console.log(filePath.ext)

//base or file name with extension of the file

console.log(filePath.base)


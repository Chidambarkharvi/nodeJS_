const validator = require('validator')
const isValid = validator.isEmail("foo@bar.com")
console.log(isValid)
const isLower = validator.isLowercase("433")
console.log(isLower);
const isDate = validator.isDate("2013-01-01")
console.log(isDate)

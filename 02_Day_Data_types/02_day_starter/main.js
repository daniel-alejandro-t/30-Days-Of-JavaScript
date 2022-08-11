// this is your main.js script
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase)
console.log(challenge.toLocaleLowerCase)
console.log(challenge.split(' '))

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

// Use indexOf to find the position of the first occurrence of the word because in the following
// sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.indexOf('because'))

// 18 Use lastIndexOf to find the position of the last occurrence of the word because in the
// following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.lastIndexOf('because'))

// 19 Use search to find the position of the first occurrence of the word because in the
// following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(challenge.search('because'))

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g
// ' 30 Days Of JavaScript '.
challenge = ' 30 Days Of JavaScript '
challenge = challenge.trim()
console.log(challenge)

// 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30 Days'))

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script'))

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
string1 = '30 Days of'
string2 = 'JavaScript'
console.log(challenge.concat(string1 , string2))

// 25 Use repear() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))


exercise1 = "The quote /'There is no exercise better for the heart than reaching down and lifting people up./' by John Holmes teaches us help one another."
console.log(exercise1)


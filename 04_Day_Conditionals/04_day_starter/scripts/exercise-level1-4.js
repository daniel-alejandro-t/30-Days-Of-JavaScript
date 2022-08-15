/*
Even numbers are divisible by 2 and the remainder is zero.
How do you check, if a number is even or not using JavaScript?
*/
let number = parseInt(prompt('Insert a number: '))

alert(number % 2 == 0? number + ' is an even number': number + ' is an odd number.')

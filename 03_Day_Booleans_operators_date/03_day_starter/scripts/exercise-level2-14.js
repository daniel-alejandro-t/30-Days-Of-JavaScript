/*
Write a script that prompt the user to enter number of years.
Calculate the number of seconds a person can live. Assume some one lives
just hundred years
*/

let birthYear = parseInt(prompt('Enter number of years you live:: '))

let timestamp = new Date()

timestamp.setFullYear(2070 - birthYear)

alert('You lived ' + timestamp.getTime() + ' seconds.')
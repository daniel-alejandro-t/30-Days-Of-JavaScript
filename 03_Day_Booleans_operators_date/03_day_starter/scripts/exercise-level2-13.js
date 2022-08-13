/*
Using prompt get the year the user was born and if the user is 18 or above
allow the user to drive if not tell the user to wait a certain amount of years.
*/
let birthYear = parseInt(prompt('Enter birth year: '))

let age = 2022 - birthYear 

info = 'You are ' + age + '.'

alert(age >= 18? info + ' You are old enough to drive':
                 info + 'You will be allowed to drive after ' + (18 - age) + ' years.')

/*
Compare the values of myAge and yourAge using if … else.
Based on the comparison and log the result to console stating
who is older (me or you). Use prompt(“Enter your age:”)
to get the age as input.
*/

let age = parseInt(prompt('Enter your age: '))

myAge = 28

if (age > myAge){
    alert('You are ' + (age - myAge) + ' older than me. ')
}else if(myAge > age){
    alert('You are ' + (myAge - age) + ' older than me. ')
}else{
    alert('You have same age ')
}
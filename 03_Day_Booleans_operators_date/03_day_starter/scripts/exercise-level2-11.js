/*
Compare your first name length and your family name length
and you should get this output.
*/

let firstName = prompt('Insert first name: ')
let lastName = prompt('Insert last name: ')

alert(firstName.length > lastName.length?
    'Your first name, ' + firstName + ' is longer than your family name, ' + lastName:
    'Your family name, ' + lastName + ' is longer than your first name, ' + firstName)
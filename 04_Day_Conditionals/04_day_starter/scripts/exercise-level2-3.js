/*
Check if a day is weekend day or a working day.
Your script will take day as an input.
*/

let day = prompt('What is the day today? ').toLocaleLowerCase()

switch (true) {
    case day == 'saturday' || day == 'sunday':
        alert( day + ' is a weekend.')
        break;

    default:
        alert(day + ' is a working day')
        break;
}
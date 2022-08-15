// Write a program which tells the number of days in a month,
// now consider leap year.
let month = prompt('Enter a month: ').toLowerCase()
let year = parseInt(prompt('Enter a year: '))

switch (true) {
    case month == 'november' || month == 'april' || month == ' june' || month == 'september':
        alert(month + ' has 30 days.')
        break;
    case (month == 'february'):
        alert((year % 400 == 0) && (year % 100 == 0) ?
        month + ' has 28 days.': month + ' has 29 days')
        break;
    default:
        alert(month + ' has 31 days.')
        break;
}
// Write a program which tells the number of days in a month.
let month = prompt('Enter a month: ').toLowerCase()

switch (true) {
    case month == 'november' || month == 'april' || month == ' june' || month == 'september':
        alert(month + ' has 30 days.')
        break;
    case (month == 'february'):
        alert(month + ' has 28 days.')
        break;
    default:
        alert(month + ' has 31 days.')
        break;
}
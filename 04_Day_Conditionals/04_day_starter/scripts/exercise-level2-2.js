/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let month = prompt('Enter month: ').toLocaleLowerCase

switch (true) {
    case month == 'september' || month == 'octuber' || month == 'november':
        alert('Autumn')
        break;
    case month == 'december' || month == 'january' || month == 'february':
        alert('winter')
        break;
    case month == 'march' || month == 'april' || month == 'may':
        alert('Spring')
        break;
    default:
        alert('Summer')
        break;
}
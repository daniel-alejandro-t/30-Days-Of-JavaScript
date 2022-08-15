/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = parseInt(prompt('Insert score: '))

switch (true) {
    case score >= 80:
        alert('Grade A')
        break;
    case score >= 70:
        alert('Grade B')
        break;
    case score >= 60:
        alert('Grade C')
        break;
    case score >= 50:
        alert('Grade D')
        break;
    default:
        alert('Grade F')
        break;
}
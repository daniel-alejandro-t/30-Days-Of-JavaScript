Variables requeridas

1
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.


```javascript
let challenge = '30 Days Of JavaScript'

```

2. Print the string on the browser console using console.log()


```javascript
console.log(challenge)
```

    30 Days Of JavaScript


3. Print the length of the string on the browser console using console.log()


```javascript
console.log(challenge.length)
```

    21


4. Change all the string characters to capital letters using toUpperCase() method


```javascript
console.log(challenge.toUpperCase())
```

    30 DAYS OF JAVASCRIPT


5. Change all the string characters to lowercase letters using toLowerCase() method


```javascript
console.log(challenge.toLowerCase())
```

    30 days of javascript


6. Cut (slice) out the first word of the string using substr() or substring() method


```javascript
console.log(challenge.split(' '))
```

    [ '30', 'Days', 'Of', 'JavaScript' ]


7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


```javascript
console.log(challenge.substring(3))
```

    Days Of JavaScript


8. Check if the string contains a word Script using includes() method


```javascript
console.log(challenge.includes('Script'))
```

    true


9. Split the string into an array using split() method


```javascript
console.log(challenge.split())
```

    [ '30 Days Of JavaScript' ]


10. Split the string 30 Days Of JavaScript at the space using split() method


```javascript
console.log(challenge.split(' '))
```

    [ '30', 'Days', 'Of', 'JavaScript' ]


11. Split the string 30 Days Of JavaScript at the space using split() method


```javascript
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(', '))
```

    [
      'Facebook',
      'Google',
      'Microsoft',
      'Apple',
      'IBM',
      'Oracle',
      'Amazon'
    ]


12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.


```javascript
console.log(challenge.replace('JavaScript', 'Python'))
```

    30 Days Of Python


13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.


```javascript
console.log(challenge.charAt(15))
```

    S


14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()


```javascript
console.log(challenge.charCodeAt('J'))
```

    51


15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript


```javascript
console.log(challenge.indexOf('a'))
```

    4


16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.


```javascript
console.log(challenge.lastIndexOf('a'))
```

    14


17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


```javascript
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
```

    31


18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


```javascript
console.log(sentence.lastIndexOf('because'))
```

    47


19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


```javascript
console.log(sentence.search('because'))
```

    31


20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.


```javascript
challenge = ' 30 Days Of JavaScript '
challenge = challenge.trim()
console.log(challenge)
```

    30 Days Of JavaScript


21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true


```javascript
console.log(challenge.startsWith('30 Days'))
```

    true


22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true


```javascript
console.log(challenge.endsWith('Script'))
```

    true


23. Use match() method to find all the a’s in 30 Days Of JavaScript


```javascript
console.log(challenge.match('a'))
```

    [ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]


24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'


```javascript
string1 = '30 Days of'
string2 = ' JavaScript'
console.log(string1.concat(string2))
```

    30 Days of JavaScript


25. Use repeat() method to print 30 Days Of JavaScript 2 times


```javascript
console.log(challenge.repeat(2))
```

    30 Days Of JavaScript30 Days Of JavaScript


# Exercise: Level 2

1. Using console.log() print out the following statement:


```javascript
exercise1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us help one another."
console.log(exercise1)
```

    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us help one another.


2. Using console.log() print out the following quote by Mother Teresa:


```javascript
exercise2 = '"Love is not patronizing and chrity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead. "'
console.log(exercise2)
```

    "Love is not patronizing and chrity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead. "


3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.


```javascript
let number = '10'
console.log(typeof(number))

if (number == 10){
    console.log('Same')
}else{
    console.log('no same')
    number = parseInt(number)
}

```

    string
    Same


4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.


```javascript
if (parseFloat('9.8') == 10){
    console.log('Same')
}else{
    console.log('Diferent')
}
```

    Diferent


5. Check if 'on' is found in both python and jargon


```javascript
sentenseExc5 = 'python and jargon'

sentenseExc5.search('on')
```




    4



6. I hope this course is not full of jargon. Check if jargon is in the sentence.


```javascript
sentenseExc6 = 'I hope this course is not full of jargon'
sentenseExc6.includes('jargon')
```




    true



7. Generate a random number between 0 and 100 inclusively.


```javascript
console.log(parseInt(Math.random() * 100))
```

    57


8. Generate a random number between 50 and 100 inclusively.


```javascript
console.log(parseInt( Math.random() * (100 - 50 + 1) + 50))
```

    86


9. Generate a random number between 0 and 255 inclusively.


```javascript
console.log(parseInt(Math.random() * 255))
```

    149


10. Access the 'JavaScript' string characters using a random number.


```javascript
wordExc10 = 'JavaScript'
console.log(wordExc10.charAt( Math.random() * (wordExc10.lenght - 0 + 1) + 0 ))
```

    J


11. Use console.log() and escape characters to print the following pattern.


```javascript
for (i = 1; i <= 5; i++) {
    console.log( i + ' ' + 1 + ' ' + i + ' ' + i * i + ' ' + i ** 3)
}
```

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125


12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'


```javascript
sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substring(31, 55))
```

    because because because 


# Exercises: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.


```javascript
sentenceExc1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentenceExc1.match('love'))
```

    [
      'love',
      index: 55,
      input: 'Love is the best thing in this world. Some found their love and some are still looking for their love.',
      groups: undefined
    ]


2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'


```javascript
sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match('because'))
```

    [
      'because',
      index: 31,
      input: 'You cannot end a sentence with because because because is a conjunction',
      groups: undefined
    ]


3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).


```javascript
sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

new_sentence = sentence3.replace(/$/g, '')
new_sentence = new_sentence.replace(/@/g, '')
new_sentence = new_sentence.replace(/&/g, '')
new_sentence = new_sentence.replace(/%/g, '')
new_sentence = new_sentence.replace(/#/g, '')
new_sentence = new_sentence.replace(/$/g, '')

console.log(new_sentence)
```

    I $am a teacher, and I love teaching;. There $is nothing; as more rewarding as educating and empowering people. ;I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also $the $result of love of teaching


4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'


```javascript
sentence4 =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
values = sentence4.match(/\d+/g)

salaryPerMonth = parseInt(values[0])
annualBonus    = parseInt(values[1])
coursesPerMonth = parseInt(values[2])

console.log(salaryPerMonth + annualBonus + coursesPerMonth)
```

    30000


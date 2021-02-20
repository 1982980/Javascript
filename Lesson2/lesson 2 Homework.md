lesson 2 Homework.md

1. Welcome User
   Get the first name and last name from the user using the prompt box and display a welcome message that says “Hello Parvez Ansari”

2. Compare Strings
   Get two values from the user ‘password’ and ‘confirm password’ using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

3. Calculate the length of the string
   Get an input from the user using the prompt box and display the length of the string.
   e.g “Parvez Ansari” should output will be 13.

4. Reverse the string
   Get an input from the user using the prompt box and reverse the string.
   e.g “Parvez” should return “zevrap”.

5. Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

DrEvil(10): 10 dollars
DrEvil(1000000): 1000000 dollars (pinky)

6. Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

mixUp('mix', pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'

7. Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'

8. Create a function called notBad that takes a single argument, a string. It should find the first appearance of the substring 'not' and 'bad'. If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result. If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
   For example:

notBad('This dinner is not that bad!'): 'This dinner is good!'
notBad('This movie is not so bad!'): 'This movie is good!'
notBad('This dinner is bad!'): 'This dinner is bad!'

- If you want more practice you can solve exercises from these sources. Be aware that still you shouldn’t use any functions. Use prompts to get values. You will have a possibility to rewrite your solution to functions later.
  https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php
  https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php

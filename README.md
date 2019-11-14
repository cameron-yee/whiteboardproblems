# Whiteboard Problems 
Here are answers to common white board coding problems.  I've done these problems in Javascript and ran them through Node. To test the solutions, run the file with Node and supply pass a test string as a command line argument.

Example:

```bash
    $ node palindrome.js poop

    Output: true

    $ node palindrome.js teststring

    Output: false
```

## Problems

1. String Reversal
    * Problem: Given a string of characters as input, write a function that returns it with the characters reversed.

    * Solution File: stringreversal.js

2. Palindrome
    * Problem: A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

    * Solution File: palindrome.js

3. Int Reverse
    * Problem: Given an integer, reverse the order of the digits.

    * Solution File: intreverse.js

4. Fizz Buzz
    * Problem: Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

    * Solution File: fizzbuzz.js

5. Max Character
    * Problem: Given a string of characters, return the character that appears the most often.

    * Solution File: maxcharacter.js

6. Anagrams
    * Problem: Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.

    * Solution File: anagrams.js

7. Vowels
    * Problem: Given a string of words or phrases, count the number of vowels.

    * Solution File: vowels.js

8. Array Chunking
    * Problem: Given an array and a size, split the array items into a list of arrays of the given size.

    * Solution File: arraychunking.js

9. Reverse Array
    * Problem: Given an array of items, reverse the order.

    * Solution File: reversearray.js

10. Reverse Words
    * Problem: Given a phrase, reverse the order of the characters of each word.

    * Solution File: reversewords.js

11. Capitalization
    * Problem: Given a phrase, capitalize every word.

    * Solution File: capitalization.js

12. Caesar Cipher
    * Problem: Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

    * Solution File: caesarcipher.js

13. Ransom Note
    * Problem: Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words. In other words, see if all the words in the ransom note are in a giant string of words.

    * Solution File: ransomnote.js

14. Mean, Median, and Mode
    * Problem: Given an array of numbers, calculate the mean, median, and mode.

    * Solution File: mmm.js

15. Two Sum
    * Problem: Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

    * Solution File: twosum.js

16. Max Difference
    * Problem: Given a list of numbers, find the two numbers that have the greatest difference.

    * Solution File: maxdifference.js

17. Sieve of Eratosthenes
    * Problem: For a given number, find all the prime numbers from zero to that number.

    * Solution File: prime.js

18. Fibonacci
    * Problem: Implement a function that returns the fibonacci number (sum of the previous 2) at a given index.

    * Solution File: fibonacci.js

19. Memoized Fibonacci
    * Problem: Implement a performant recursive function for the fibonacci series.

    * Solution File: memoizedfibonacci.js

20. Staircase
    * Problem: For a given number of steps, print out a “staircase” using hashes and spaces.

    * Example: steps(3), "#  \n## \n###\n"

    * Solution File: staircase.js 

21. Pyramid
    * Problem: For a given number of levels, print out a “pyramid” using hashes and spaces. 

    * Example:   #  \n ### \n#####\n"

    * Solution File: pyramid.js

22. Matrix Spiral
    * Problem: Create a square matrix of a given size in which elements are in spiral order.

    * Example: spiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

    * Solution File: NOT CREATED YET

23. Can Sum:
    * Problem: Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    * Example: [10, 7, 3], 17 -> true; [10, 2, 3,], 17 -> false

    * Solution File: cansum.js

24. Edit Distance
    * SOLUTION NOT COMPLETE

    * Problem: The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other.

    * Example: The edit distance between "kitten" and "sitting" is three: substitute the “k" for "s", substitute the "e" for "i", and append a "g".

    * Solution File: editdistance.js

24. RGB
    * SOLUTION NOT COMPLETE

    * Problem: Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array. Do this in linear time and in-place.

    * Example: For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

    * Solution File: rgb.js

24. Merge Sort Algorithm
    * SOLUTION NOT COMPLETE

    * Problem: Sort an array of strings using a merge sort algorithm.

    * Example: For example, given the array ['Giraffe', 'Ant', 'Red Snake', 'Panda'], it should become ['Ant', 'Giraffe', 'Panda', 'Red Snake'].

    * Solution File: mergesort.js

25. Coin Expectancy
    * Problem: You have n fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?  Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

    * Solution File: coinexpectancy.js

26. Only Once
    * Problem: Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

    * Example: For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

    * Solution File: onlyonce.js

27. Full Adder
    * Problem: Sum up two integer numbers using bitwise operators.

    * Resource: [YouTube video](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

    * Resource: [Explanation](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits/fullAdder.js)

    * Solution File: fulladder.js

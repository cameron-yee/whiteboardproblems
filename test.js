import test from 'ava'
const vowels = require('./problems/vowels')
const anagrams = require('./problems/anagrams')
const fizzbuzz = require('./problems/fizzbuzz')
const intreverse = require('./problems/intreverse')
const palindrome = require('./problems/palindrome')
const stringreverse = require('./problems/stringreverse')
const maxcharacter = require('./problems/maxcharacter')
const arraychunking = require('./problems/arraychunking')
const reversearray = require('./problems/reversearray')
const reversewords = require('./problems/reversewords')
const capitalize = require('./problems/capitalization')
const caesarcipher = require('./problems/caesarcipher')
const ransomnote = require('./problems/ransomnote')
const mmm = require('./problems/mmm')
const twosum = require('./problems/twosum')
const maxdifference = require('./problems/maxdifference')
const prime = require('./problems/prime')
const fibonacci = require('./problems/fibonacci')
const memoizedfibonacci = require('./problems/memoizedfibonacci')
const staircase = require('./problems/staircase')
const pyramid = require('./problems/pyramid')
const cansum = require('./problems/cansum')
const editdistance = require('./problems/editdistance')
const rgb = require('./problems/rgb')
const coinexpectancy = require('./problems/coinexpectancy')

//console.log(vowels.countVowels('twoo'))

test('vowels', t => {
    t.is(vowels.countVowels('twoo'), 2)
})

test('anagrams', t => {
    t.truthy(anagrams.isAnagram('iceman', 'manice'))   
})

test('fizzbuzz', t => {
    t.deepEqual(fizzbuzz.fizzbuzz(6),[1, 'Fizz', 'Buzz', 'Fizz', 5, 'Fizz Buzz'])
})

test('intreverse', t => {
    t.plan(2)
    t.is(intreverse.reverseInt(-1234), -4321)
    t.is(intreverse.reverseInt(1212), 2121)
})

test('palindrome', t => {
    t.plan(2)
    t.truthy(palindrome.isPalindrome('polop'))  
    t.falsy(palindrome.isPalindrome('polip'))  
})

test('stringreverse', t => {
    t.plan(2)
    t.is(stringreverse.reverseString('teststring'), 'gnirtstset')
    t.is(stringreverse.reverseString('Tes@'), '@seT')
})

test('maxcharacter', t => {
    let char_json = maxcharacter.countChars('aaaacccsstte')
    t.deepEqual(maxcharacter.getMax(char_json), ['a', 4])
})

test('arraychunking', t => {
    t.plan(3)
    t.deepEqual(arraychunking.chunk([1,2,3,4,5,6,7,8,9,10,11,12,13], 3), [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13]])
    t.deepEqual(arraychunking.chunk([1,2,3,4,5,6,7,8,9,10,11,12,13], 1), [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13]])
    t.deepEqual(arraychunking.chunk(['Tim'], 5), ['Tim'])
})

test('reversearray', t => {
    t.deepEqual(reversearray.reversearray([1,2,3,4,5,6,7,8,9,10,11,12,13]), [13,12,11,10,9,8,7,6,5,4,3,2,1])
})

test('reversewords', t => {
    t.deepEqual(reversewords.reversewords('The Rain in Spain'), 'ehT niaR ni niapS')
})

test('capitalize', t => {
    t.deepEqual(capitalize.capitalize('the Rain in spaIn'), 'The Rain In SpaIn')
    t.deepEqual(capitalize.capitalize('   the   Rain in a   spaIn'), '   The   Rain In A   SpaIn')
})

test('caesarcipher', t => {
    t.plan(2)
    let phrase = 'The Rain in Spain'
    let coded = caesarcipher.cipher(3, phrase)
    t.deepEqual(coded, 'Wkh Udlq lq Vsdlq')
    let deciphered = caesarcipher.decipher(3, coded)
    t.deepEqual(deciphered, phrase)
})

test('ransomnote', t => {
    t.plan(2)

    const magazine = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    t.truthy(ransomnote.ransomnote('sit ad est sint', magazine))
    t.falsy(ransomnote.ransomnote('sit ad est sint in in in in', magazine))
})

test('mmm', t => {
    t.plan(2)
    const numbers = [1,1,3,4,5,6,7,8,9,10]
    t.deepEqual(mmm.calcMMM(numbers), {"median": 5.5, "mean": 5.4, "mode": [1]})
    const numbers_2 = [1,1,3,3,5,6,7,8,9,10]
    t.deepEqual(mmm.calcMMM(numbers_2), {"median": 5.5, "mean": 5.3, "mode": [1, 3,],})
})

test('twosum', t => {
    t.plan(2)
    const numbers = [1,1,3,4,5,6,7,8,9,10]
    t.deepEqual(twosum.twonumbersumfinder(numbers, 8), [[1,7],[1,7],[3,5]])
    const numbers_2 = [1.1,0.2,0,1.3]
    t.deepEqual(twosum.twonumbersumfinder(numbers_2, 1.3), [[1.1,0.2],[0, 1.3]])
})

test('maxdifference', t => {
    t.plan(2)
    const numbers = [1,10,3,4,5,6,7,8,9,10]
    t.deepEqual(maxdifference.maxdifference(numbers), [9,[10,1]])
    const numbers_2 = [-1,1,1,3,4,5,6,7,8,9,10]
    t.deepEqual(maxdifference.maxdifference(numbers_2), [11,[10,-1]])
})

test('prime', t => {
    t.plan(2)
    t.deepEqual(prime.getPrimesInRange(25), [2, 3, 5, 7, 11, 13, 17, 19, 23])
    t.deepEqual(prime.getPrimesInRange(550), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547])
})

test('fibonacci', t => {
    t.plan(2)
    t.is(fibonacci.fibonacci(5), 5)
    t.is(fibonacci.fibonacci(28), 317811) 
})

test('memoizedfibonacci', t => {
    t.plan(5)
    let one = memoizedfibonacci.memoized(5)
    let two = memoizedfibonacci.memoized(10, [0,1,1,2,3,5])
    let three = memoizedfibonacci.memoized(5, [0,1,1,2,3,5])
    let four = memoizedfibonacci.memoized(4, [0,1,1,2,3,5])
    let five = memoizedfibonacci.memoized(3, [0,1,1,2,3,5])
    t.is(one, 5)
    t.is(two, 55)
    t.is(three, 5)
    t.is(four, 3)
    t.is(five, 2)
})

test('stairs', t => {
    t.plan(2)
    t.deepEqual(staircase.staircase(3), [`#\n` , `##\n`, `###\n`])
    t.deepEqual(staircase.staircase(5), [`#\n` , `##\n`, `###\n`, `####\n`, `#####\n`])
})

test('pyramid', t => {
    t.plan(2)
    t.deepEqual(pyramid.pyramid(3), [`  #\n` , ` ###\n`, `#####\n`])
    t.deepEqual(pyramid.pyramid(5), [`    #\n` , `   ###\n`, `  #####\n`, ` #######\n`, `#########\n`])
})

test('cansum', t => {
    t.plan(2)
    let one = cansum.cansum([10, 4, 7, 5], 17)
    let two = cansum.cansum([10, 4, 1, 5], 17)
    t.truthy(one)
    t.falsy(two)
})

test('editdistance', t => {
    t.plan(3)
    let one = editdistance.editdistance('kitten', 'sitting')
    let two = editdistance.editdistance('cam', 'cameron')
    let three = editdistance.editdistance('cam', 'cam')

    t.deepEqual(one, 3)
    t.deepEqual(two, 4)
    t.deepEqual(three, 0)
})

test('rgb', t => {
    t.plan(2)
    let one = rgb.rgb(['R','G','B','B','R','G'])
    let two = rgb.rgb(['G','B','B','R','R','G'])

    t.deepEqual(one, ['R','R','G','G','B','B'])
    t.deepEqual(two, ['R','R','G','G','B','B'])
})

test('coinexpectancy', t => {
    t.is(typeof coinexpectancy.coinExpectancy(5), 'number')
})

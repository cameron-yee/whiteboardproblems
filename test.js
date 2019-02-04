import test from 'ava'
var vowels = require('./problems/vowels')
var anagrams = require('./problems/anagrams')
var fizzbuzz = require('./problems/fizzbuzz')
var intreverse = require('./problems/intreverse')
var palindrome = require('./problems/palindrome')
var stringreverse = require('./problems/stringreverse')
var maxcharacter = require('./problems/maxcharacter')
var arraychunking = require('./problems/arraychunking')
var reversearray = require('./problems/reversearray')
var reversewords = require('./problems/reversewords')
var capitalize = require('./problems/capitalization')
var caesarcipher = require('./problems/caesarcipher')
var ransomnote = require('./problems/ransomnote')
var mmm = require('./problems/mmm')
var twosum = require('./problems/twosum')

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

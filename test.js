import test from 'ava'
var vowels = require('./problems/vowels')
var anagrams = require('./problems/anagrams')
var fizzbuzz = require('./problems/fizzbuzz')
var intreverse = require('./problems/intreverse')
var palindrome = require('./problems/palindrome')
var stringreverse = require('./problems/stringreverse')
var maxcharacter = require('./problems/maxcharacter')

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
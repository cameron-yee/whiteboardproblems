exports.isPalindrome = (word) => {
    let new_word = ''

    for(let i = word.length - 1; i >= 0; i--) {
        new_word = new_word + word[i]
    }

    if(word === new_word) {
        return true
    } else {
        return false
    }
}

//let solution = isPalindrome(process.argv[2])
//console.log(solution)

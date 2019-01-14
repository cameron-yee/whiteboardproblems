const isPalindrome = (word) => {
    const length = word.length

    //let start = 0
    let end = length

    if(length % 2 !== 0) {
        return false
    } else {
        for(let i = 0; i < length/2; i++) {
            if(word[i] !== word[end - 1]) {
                return false
            } else {
                end--
            }
        }
    }

    return true
}

let solution = isPalindrome(process.argv[2])
console.log(solution)

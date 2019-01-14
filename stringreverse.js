const reverseString = (word) => {
    let new_string = ''
    for(let i = word.length - 1; i >= 0; i--) {
       new_string = new_string + word[i]
    }

    return new_string
}

let solution = reverseString(process.argv[2])
console.log(solution)

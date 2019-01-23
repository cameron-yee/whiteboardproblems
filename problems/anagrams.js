exports.isAnagram = (input_one, input_two) => {
    input_one_characters = input_one.split('').sort()
    input_two_characters = input_two.split('').sort()

    if(input_one_characters.length === input_two_characters.length) {
        for(let i = 0; i < input_one_characters.length; i++) {
            if(input_one_characters[i].toString() !== input_two_characters[i].toString()) {
               return false 
            }
        }
        return true
    } else {
        return false
    }
}

//const solution = isAnagram(process.argv[2], process.argv[3])
//console.log(solution)

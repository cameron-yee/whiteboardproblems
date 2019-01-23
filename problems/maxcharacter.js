exports.countChars = (string) => {
    let char_json = {}
    for(let i = 0; i < string.length; i++) {
        if(char_json[string[i]] === undefined) {
            char_json[string[i]] = 1
        } else {
            char_json[string[i]]++
        }
    }

    return char_json
}

exports.getMax = (char_json) => {
    let max = ['', 0]
    for(let key in char_json) {
        if(char_json[key] > max[1]) {
            max[0] = key
            max[1] = char_json[key]
        }
    }

    return max
}

//const char_json = countChars(process.argv[2])
//const solution = getMax(char_json)
//console.log(solution)

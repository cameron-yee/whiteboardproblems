const reverseInt = (integer) => {
    const isNegative = integer < 0
    let  storage = ''
    let  integer_as_string = integer.toString()

    if(isNegative) {
        storage = '-'
        integer_as_string = integer_as_string.split('-')[1]
    }

    for(let i = integer_as_string.length - 1; i >= 0; i--) {
        storage = storage + integer_as_string[i]
    }


    let new_integer = parseInt(storage)
    return new_integer
}

let solution = reverseInt(process.argv[2])
console.log(solution)


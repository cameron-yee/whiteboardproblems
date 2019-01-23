const isDivisibleByTwo = (integer) => {
    return integer%2 == 0
}

const isDivisibleByThree = (integer) => {
    return integer%3 == 0
}

exports.fizzbuzz = (integer) => {
    let output = []

    for(let i = 1; i <= integer; i++) {
        let divisible_by_two = isDivisibleByTwo(i)
        let divisible_by_three = isDivisibleByThree(i)

        if(divisible_by_two && divisible_by_three) {
            output.push('Fizz Buzz')
        } else if(divisible_by_three) {
            output.push('Buzz')
        } else if(divisible_by_two) {
            output.push('Fizz')
        } else {
            output.push(i)
        }
    }

    return output
}

//fizzBuzz(process.argv[2])


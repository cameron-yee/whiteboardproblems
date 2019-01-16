const isDivisibleByTwo = (integer) => {
    return integer%2 == 0
}

const isDivisibleByThree = (integer) => {
    return integer%3 == 0
}

const fizzBuzz = (integer) => {
    for(let i = 1; i <= integer; i++) {
        let divisible_by_two = isDivisibleByTwo(i)
        let divisible_by_three = isDivisibleByThree(i)

        if(divisible_by_two && divisible_by_three) {
            console.log('Fizz Buzz')
        } else if(divisible_by_three) {
            console.log('Buzz')
        } else if(divisible_by_two) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(process.argv[2])


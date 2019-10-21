exports.squareroot = (number) => {
    let positive_number =  Math.abs(number)

    for (let i = 0; i < positive_number; i += 0.01) {
        console.log((i*i).toFixed(2), positive_number.toFixed(2))
        if ((i*i).toFixed(2) === positive_number.toFixed(2)) {
            return i
        }
    }

    return 0
}

//console.log(exports.squareroot(9))
console.log(exports.squareroot(8))
//console.log(exports.squareroot(500))


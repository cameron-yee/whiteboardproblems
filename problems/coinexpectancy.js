exports.coinExpectancy = (n) => {
    let remaining_heads = n
    let count = 0

    if (remaining_heads <= 1) {
        throw Error("n must be greater than 1.")
    }

    for (let i = 0; remaining_heads > 1; count++) {
        let number_of_tails = 0
        for (let j = 0; j < remaining_heads; j++) {
            let is_tails = Math.floor(Math.random() * Math.floor(2)) === 0

            if (is_tails) {
                number_of_tails++
            }
        }

        remaining_heads = remaining_heads - number_of_tails
    }

    return count
}

exports.twonumbersumfinder = (numbers, wanted_sum) => {
    let count = 0
    let pairs = []
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let x = i + 1; x < numbers.length; x++) {
            if(numbers[i] + numbers[x] === wanted_sum) {
                pairs[count] = [numbers[i], numbers[x]]
                count++
            }
        }
    }

    return pairs
}

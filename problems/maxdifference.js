exports.maxdifference = (numbers) => {
    let max_difference = [0, []]
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let x = i + 1; x < numbers.length; x++) {
            if((numbers[i] > numbers[x]) && (numbers[i] - numbers[x] > max_difference[0])) {
                //console.log(numbers[i] - numbers[x])
                max_difference[0] = numbers[i] - numbers[x]
                max_difference[1] = [numbers[i], numbers[x]]
            } else if((numbers[x] > numbers[i]) && (numbers[x] - numbers[i] > max_difference[0])) {
                //console.log(numbers[x] - numbers[i])
                max_difference[0] = numbers[x] - numbers[i]
                max_difference[1] = [numbers[x], numbers[i]]
            }
        }
    }

    return max_difference
}

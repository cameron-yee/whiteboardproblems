exports.calcMMM = (list_of_numbers) => {
    const sorted_numbers = list_of_numbers.sort()

    let median;
    if(sorted_numbers.length % 2 === 0) {
        median = (sorted_numbers[sorted_numbers.length / 2] + sorted_numbers[sorted_numbers.length / 2 + 1]) / 2
    } else {
        median = sorted_numbers[(sorted_numbers.length + 1) / 2] 
    }

    let sum = 0;
    let count = {}; 
    for(let i = 0; i < sorted_numbers.length; i++) {
        sum += sorted_numbers[i]
        if(count[sorted_numbers[i]] === undefined) {
            count[sorted_numbers[i]] = 1
        } else {
            count[sorted_numbers[i]] += 1
        }
    }

    const mean = sum / sorted_numbers.length

    let mode = [0];
    for(let key in count) {
       if(mode[0] === 0) {
           mode = [parseFloat(key)]
       } else if(count[key] > count[mode[0]]) {
           mode = [parseFloat(key)]
       } else if(count[key] ===  count[mode[0]]) {
           mode.push(parseFloat(key))
       }
    }

    const mmm = {"median": median, "mean": mean, "mode": mode}
    return mmm
}

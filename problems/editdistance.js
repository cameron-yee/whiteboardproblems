exports.editdistance = (one, two) => {
    let difference, count

    difference = one.length - two.length
    count = 0

    if (difference <= 0) {
        difference = two.length - one.length

        for (let i = 0; i < one.length; i++) {
            if (one[i] !== two[i]) {
                count++
            }
        }
    } else {
        for (let i = 0; i < two.length; i++) {
            if (one[i] !== two[i]) {
                console.log(one[i], two[i])
                count++
            }
        }
    }

    return count + difference
}

exports.editdistance('kitten', 'sitting')

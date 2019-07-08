swap = (rgb_array, first_index) => {
    let temp = rgb_array[first_index]
    rgb_array[first_index] = rgb_array[first_index + 1]
    rgb_array[first_index + 1] = temp

    return rgb_array
}

exports.rgb = (rgb_array) => {
    for (let i = 0; i < rgb_array.length - 1; i) {
        let first_element = rgb_array[i]
        let second_element = rgb_array[i + 1]

        if (first_element !== 'R' && second_element === 'R') {
            rgb_array = swap(rgb_array, i)

            if (i !== 0) {
                i--
                continue
            }
        } else if (first_element === 'G' && second_element === 'R') {
            rgb_array = swap(rgb_array, i)

            if (i !== 0) {
                i --
                continue
            }
        } else if (first_element === 'B' && second_element !== 'B') {
            rgb_array = swap(rgb_array, i)

            if (i !== 0) {
                i--
                continue
            }

        } else {
            i++
        }
    }

    return rgb_array
}


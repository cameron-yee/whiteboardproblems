//exports.chunk = (array, size) => {
//    const number_of_lists = array.length / size
//    for(let i = 0; i < array.length; i++) {
//        if(i < size) {
//          COULDN'T FIGURE OUT HOW TO MAKE A VARIABLE AMOUNT OF ARRAYS
//        }
//    }
//}

exports.chunk = (array, size) => {
    const number_of_lists = Math.ceil(array.length / size)
    let lower_limit = 0

    let new_arrays = []

    for(let i = 0; i < array.length + size; i = i + size) {
        if(number_of_lists < size) {
            return array
        } else if(i % size === 0 && i !== 0) {
           new_arrays.push(array.slice(lower_limit, i))
            lower_limit = i
        }
    }

    return new_arrays
}

const merge = (array, left_start, right_end, temp) => {
    let left_end = (left_start + right_end) / 2
    let right_start = (left_end + 1) | 0
    //let size = Math.round(right_end - left_start + 1)

    let ls = left_start
    let rs = right_start
    let index = left_start
    console.log(`ls: ${ls}`)
    console.log(`rs: ${rs}`)

    while (ls < left_end && rs <= right_end) {
        if (array[ls] <= array[rs]) {
            //console.log(array[ls])
            //temp[index] = array[ls]
            temp.push(array[ls])
            ls++
        } else {
            //console.log(temp[index])
            //console.log(array[rs])
            //temp[index] = array[rs]
            temp.push(array[rs])
            rs++
        }

        index++
    }

    // ONLY one side has remaining elements
    //for (let i = index, l = ls; i < left_end - ls + 1; i++, l++) {
    for (let i = index, l = ls; l < left_end; i++, l++) {
        temp[i] = array[l]
    }

    // ONLY one side has remaining elements
    //for (let j = index, r = rs; j < right_end - rs + 1; j++, r++) {
    for (let j = index, r = rs; r <= right_end; j++, r++) {
        temp[j] = array[r]
    }

    for (let x = left_start; x < array.length; x++) {
        array[x] = temp[x]
    }

    console.log(array)
}

const sort = async (array, left_start, right_end, temp=[]) => {
    if (left_start >= right_end) {
        return
    }

    //const middle = Math.round((left_start + right_end) / 2)
    const middle = (left_start + right_end) / 2

    await sort(array, left_start | 0, middle | 0, temp)
    await sort(array, (middle + 1) | 0, right_end | 0, temp)
    merge(array, left_start, right_end, temp)

}

//exports.mergesort = (array) => {
const mergesort = (array) => {
    sort(array, 0, array.length - 1)
}

let array = [4, 3, 2, 1, 3, 5, 8 ,2] //It should return [1,2,2,3,3,4,5,8]
console.log(array)
mergesort(array)
console.log(array)


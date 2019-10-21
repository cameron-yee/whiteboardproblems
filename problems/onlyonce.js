//exports.onlyOnce1 = (array) => {
//    once_elements = []
//
//    for (let i = 0; i < array.length; i++) {
//        if (once_elements.indexOf(array[i]) > -1) {
//            once_elements.splice(once_elements.indexOf(array[i]), 1)
//        } else {
//            once_elements.push(array[i])
//        }
//    }
//
//    return once_elements
//}

//exports.onlyOnce2 = (array) => {
exports.onlyOnce = (array) => {
    let elem_one, elem_two
    let array_copy = array.slice(0)

    let target = 0
    for (let i = 1; i < array_copy.length; i++) {
        if (array_copy[target] === array_copy[i]) {
            array_copy.splice(target, 1)
            array_copy.splice(i - 1, 1)
            target = 0
            i = 0
        } else if (i === array_copy.length - 1) {
            target++
            i = 1
        }
    }

    return array_copy
}

//let total_time_1 = 0
//for (let i = 0; i < 1000; i++) {
//    let time = Date.now()
//    console.log(`1. ${time}`)
//    exports.onlyOnce1([2,4,6,8,10,2,6,8])
//    console.log(`2. ${Date.now()}`)
//    let time_end = Date.now() - time
//    //console.log(time_end)
//    total_time_1 += time_end
//}
//
//console.log(total_time_1)
//console.log(`Time 1 Avg: ${total_time_1 / 1000}ms`)
//
//let total_time_2 = 0
//for (let i = 0; i < 1000; i++) {
//    let time = Date.now()
//    exports.onlyOnce2([2,4,6,8,10,2,6,8])
//    let time_end = Date.now() - time
//    total_time_2 += time_end
//}
//
//console.log(total_time_2)
//console.log(`Time 2 Avg: ${total_time_2 / 1000}ms`)

exports.cansum = (list, value) => {
    for (let i = 0; i < list.length; i++) {
        let temp

        temp = value - list[i] 
        if (list.includes(temp)) {
            return true
        }
    }

    return false
}

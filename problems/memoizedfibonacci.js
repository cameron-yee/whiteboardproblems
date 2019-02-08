const addTogether = (x, y) => {
    return x + y
}

const memoized = (index, series=[0,1]) => {
    if(index < series.length) {
       return series[index]
    } else {
        let next = addTogether(series[series.length - 2], series[series.length - 1])
        series.push(next)
        return memoized(index, series)
    }

}

module.exports = {
    memoized: memoized
}

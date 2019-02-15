exports.pyramid = (levels) => {
    let pyramid = []
    for(let i = 1, s = levels - 1; s >= 0; i+=2, s--) {
        let level = '' 
        for(let ind = 0; ind < s; level+=' ', ind++) {} 
        for(let xnd = 0; xnd < i; level+='#', xnd++) {} 
        level += '\n'
        pyramid.push(level)
    }
    return pyramid
}

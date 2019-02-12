exports.staircase = (number_of_stairs) => {
    let stairs = [];
    for(let i = 0; i < number_of_stairs; i++) {
        let steps = ''
        for(x = -1; x < i; steps+='#') { x++ }
        stairs.push(`${steps}\n`)
    }
    return stairs
}

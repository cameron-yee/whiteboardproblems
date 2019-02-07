exports.fibonacci = (index) => {
    let sequence = [0,1]
    for(let i = 1; i < index; i++) {
       sequence.push(sequence[i-1] + sequence[i])
    }

    return sequence[index]
}

const getBit = (number, bit_position) => {
    return (number >> bit_position) & 1
}

exports.fullAdder = (a, b) => {
    if (!Number.isInteger(a)) {
        throw Error('First parameter must be an integer')
    }

    if (!Number.isInteger(b)) {
        throw Error('Second parameter must be an integer')
    }

    let result = 0
    let carry_out = 0
    
    for (let i = 0; i < 32; i++) {
        const ai = getBit(a, i)
        const bi = getBit(b, i)
        const carry_in = carry_out

        let sum_without_carry = ai ^ bi

        let sum_with_carry = sum_without_carry ^ carry_in

        carry_out = (ai & bi) | (carry_in & sum_without_carry)

        result |= sum_with_carry << i
    }

    return result
}

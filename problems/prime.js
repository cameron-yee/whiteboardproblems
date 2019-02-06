exports.getPrimesInRange = (number) => {
    let primes = [2]

    for(let i = 3; i <= number; i++) {
        let prime = true
        for(let x = 2; x < i; x++) {
            if(i % x == 0) {
                prime = false
                break
            }
        }

        if(prime) {
            primes.push(i)
        }
    }

    return primes
}

exports.reversewords = (phrase) => {
    const words = phrase.split(' ')
    let reverse_phrase = ''
    for(let w = 0; w < words.length; w++) {
        for(let i = words[w].length - 1; i >= 0; i--) {
           reverse_phrase = reverse_phrase + words[w][i]
        }
        if(w !== words.length - 1) {
            reverse_phrase = reverse_phrase + ' '
        }
    }

    return reverse_phrase
}

exports.capitalize = (phrase) => {
    let capital_phrase = ' ' //phrase[0] will either be a space, or another character
    if(phrase[0] !== ' ') {
        capital_phrase = phrase[0].toUpperCase()
    }

    for(let i = 1; i < phrase.length; i++) {
        if(phrase[i] === ' ' && phrase[i + 1] !== ' ') { //If there are more than one space characters in a row, we don't want to treat it with an i + 1
            capital_phrase = capital_phrase + phrase[i] + phrase[i + 1].toUpperCase() //Capitalize characters that come after spaces
            i++ //Since we add the character after the space, we need to move index twice
        } else {
            capital_phrase = capital_phrase + phrase[i]
        }
    }

    return capital_phrase
}

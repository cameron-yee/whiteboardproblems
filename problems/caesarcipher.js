exports.cipher = (key, phrase) => {
  let new_phrase = ''
  for(let i = 0; i < phrase.length; i++) {
    if(phrase[i] !== ' ') {
        new_phrase = new_phrase + String.fromCharCode(phrase[i].charCodeAt() + key)
    } else {
        new_phrase = new_phrase + phrase[i]
    }
  }

  return new_phrase
}

exports.decipher = (key, coded_phrase) => {
  let new_phrase = ''
  for(let i = 0; i < coded_phrase.length; i++) {
      if(coded_phrase[i] !== ' ') {
          new_phrase = new_phrase + String.fromCharCode(coded_phrase[i].charCodeAt() - key)
      } else {
          new_phrase = new_phrase + coded_phrase[i]
      }
  }

  return new_phrase
}

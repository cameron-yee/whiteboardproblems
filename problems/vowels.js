exports.countVowels = (wordorphrase) => {
    //I'm always including 'y'.  Sue me.
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0

    for(let i = 0; i < wordorphrase.length; i++) {
        if(vowels.includes(wordorphrase[i].toLowerCase())) {
            count++
        }
    }
    return count
}

//const solution = countVowels(process.argv[2])
//console.log(solution)

//module.exports = {
//    cv: function(wordorphrase) {
//        //I'm always including 'y'.  Sue me.
//        const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//        let count = 0
//
//        for(let i = 0; i < wordorphrase.length; i++) {
//            if(vowels.includes(wordorphrase[i].toLowerCase())) {
//                count++
//            }
//        }
//        return count
//    }
//}

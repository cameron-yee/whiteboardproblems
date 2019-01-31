exports.ransomnote = (note, magazine) => {
   const magazine_words = magazine.split(/[^a-zA-Z-]/g)
   const note_words = note.split(/[^a-zA-Z-]/g)
   let made_from_magazine = []

   for(let i = 0; i < magazine_words.length; i++) {
       for(let x = 0; x < note_words.length; x++) {
           if(magazine_words[i] === note_words[x]) {
               made_from_magazine.push(magazine_words[i])
               break
           }
       }
   }

   const sorted_made_from_magazine = made_from_magazine.sort()
   const sorted_note_words = note_words.sort() 

   if(sorted_made_from_magazine.length === sorted_note_words.length) {
       for(let i = 0; i < sorted_made_from_magazine.length; i++) {
           if(sorted_made_from_magazine[i] !== sorted_note_words[i]) {
               return false
           }
       }
       return true
   } else {
       return false
   }
}

/* eslint-disable strict */
/* eslint-disable indent */
function decode(word){
    switch(word[0]){
        case 'a':
            decodedLetter = word[1];
            return decodedLetter;
        case 'b':
            decodedLetter = word[2];
            return decodedLetter;
        case 'c':
            decodedLetter = word[3];
            return decodedLetter;
        case 'd':
            decodedLetter = word[4];
            return decodedLetter;
        default:
            return ' ';
    }
}
const decodedWord = `${decode('craft')}${decode('block')}${decode('argon')}${decode('meter')}${decode('bells')}${decode('brown')}${decode('croon')}${decode('droop')}`;
console.log(decodedWord);

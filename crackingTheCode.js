/* eslint-disable strict */
/* eslint-disable indent */
function decode(word){
    let decodedWord = [''];
    let stringArray = word.split(' ');
    let firstLetter = '';
    for(let i = 0; i <= word.length; i++){
        firstLetter = stringArray[i].substring(0);
        if (firstLetter === 'a'){
            return decodedWord[i] = stringArray.substring(2);  
        }
        else if (firstLetter === 'b'){
            return decodedWord[i] = stringArray.substring(3);  
        }
        else if (firstLetter === 'c'){
            return decodedWord[i] = stringArray.substring(4);  
        }
        else if (firstLetter === 'd'){
            return decodedWord[i] = stringArray.substring(5);  
        }
        else decodedWord[i] === ' ';
    }
   return decodedWord;
}
decode('craft block argon meter bells brown croon droop');

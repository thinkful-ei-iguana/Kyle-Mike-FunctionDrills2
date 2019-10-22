function simpleGame(numbers){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    if(numbers >= 1 || numbers <= 3){
        if(randomNo === rock && numbers === scissors){
          return 'Rock beats scissors. CPU wins.';
    } else if(randomNo === scissors && numbers === paper){
        return 'Scissors beats paper. CPU wins.';
    }  else if(randomNo === paper && numbers === rock){
            return 'Paper beats rock. CPU wins.';
    }   else if(randomNo === scissors && numbers === rock){
        return 'Rock beats scissors. Human wins.';
    }else if(randomNo === paper && numbers === scissors){
        return 'Scissors beats paper. Human wins.';
    }else if (randomNo === rock && numbers === paper){
        return 'Paper beats rock. Human wins';
    }else{
        throw new Error('Must use numbers 1, 2, or 3');
    }
    }
}
console.log(simpleGame(1));
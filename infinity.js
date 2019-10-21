function beyond(num) {
 if (num === Infinity || num === -Infinity){
     console.log('And Beyond');
 }
 else if (num > 0 ){
     console.log('To infinity');

 } else if (num < 0){
     console.log('To negative infinity');
 } else if (num === 0){
     console.log('Staying Home');
 }
}
console.log(beyond(-Infinity));
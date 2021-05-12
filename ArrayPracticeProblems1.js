/**
 * Returns a random number between min and max
 */
function generateNumbersBetween(min, max){
 return Math.floor(
     Math.random() * (max - min) + min
 )
}

for( let i = 1; i <= 10 ; i++){
    console.log(i+ " Random number is :"+generateNumbersBetween(100,999));
}




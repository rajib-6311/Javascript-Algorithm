function primeSum(number){
    primeTotal = 0;

    for(let i = 2; i < number; i++){
        for(let j = 2; j < number; j++){
            if(i === j){
                primeTotal += i;
            }
            if( i % j === 0){
            break;
        }
        } 
    }
    return primeTotal;
}

console.log(primeSum(10))
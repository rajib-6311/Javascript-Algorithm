
var romanToInt = function(s){
    let sum = 0;
    let roman={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }

    let strArray = s.split('');
    for(let i=0; i<strArray.length; i++){
        let currentElement = strArray[i];
        let currentNextElement = strArray[i+1];

        if(roman[currentElement] < roman[currentNextElement]){
            sum += roman[currentNextElement] - roman[currentElement];
            i++;
        }
        else{
            sum += roman[currentElement]
        }
    }
    return sum;
}

console.log(romanToInt("MCMXCIV"))
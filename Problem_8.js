//Inverted Half pyramid
//*****
//****
//*** 
//**
//*

function invertedHalfPyramid(num){
    let star = ''
    for(let i = num; i>=1; i--){
        for(let j=1; j<=i; j++){
            star += '*'
        }
        star += '\n'
    }
    return star
}
console.log(invertedHalfPyramid(5))
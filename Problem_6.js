//Rectangle pattern
// *****
// *****
// *****
// *****
function rectanglePattern(row,col){
    let star = ''

    for(let i = 1; i <= row; i++){
        for(let j = 1; j<=col; j++){
            star += '*'
        }
        star += '\n'
    }
    return star;
}
console.log(rectanglePattern(4,5))
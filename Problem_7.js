
// Hollow Rectangle pattern
// *****
// *   *
// *   *
// *****

function hollowRectanglePattern(row, col) {
    let star = '';
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (i === 1 || i === row || j === 1 || j === col) {
                star += '*';
            } else {
                star += ' ';
            }
        }
        star += '\n';
    }
    return star;
}

console.log(hollowRectanglePattern(4, 5));

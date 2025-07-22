
function sum(params1, params2){
    return params1 + params2;
}
console.log(sum(1,2));

// output 3 
// ... means [1,2,3,34] 
function totalSum (...params1){
    let total = 0;
    params1.forEach(perElement =>{
        total += perElement;
    }) 
    return total;
}

console.log(totalSum(1,3,3));

// output = 7 
// inputArray = 1,2,1
// elementToReplace = 1
// subtractionElem = 3

function arrayReplace(inputArray, elementToReplace, subtractionElem){
    inputArray.forEach((element, index) => {
        if(element === elementToReplace){
            inputArray[index] = subtractionElem;
        }
    })
    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);

// output = 3,2,3 
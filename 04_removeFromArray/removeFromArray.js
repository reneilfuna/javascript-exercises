const removeFromArray = function(array, toRemove) {
    let newArray = [];
    // Check where item is in array
    for (i=0; i<array.length; i++){
        if (array[i] != toRemove)
            newArray.push(array[i])
    }
    console.log(newArray)
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

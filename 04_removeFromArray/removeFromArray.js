const removeFromArray = function(array, ...toRemove) {

    let newArray = [];
    if (toRemove.length == 1){
        // Check where item is in array
        for (i=0; i<array.length; i++){
            if (array[i] != toRemove)
                newArray.push(array[i])
        }
        return newArray;
    }
    else if (toRemove.length > 1){
        for (const remove of toRemove){
            for (i=0; i<array.length; i++){
                if(array[i] === remove){
                    array.splice(i, 1)
                }
            }
        }
    return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;

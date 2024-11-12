const sumAll = function(positiveInteger1, positiveInteger2) {

    if (positiveInteger1 < 0 || positiveInteger2 < 0)
        return "ERROR";
    else if (Number.isInteger(positiveInteger1) == false || Number.isInteger(positiveInteger2) == false ){
        return "ERROR";
    }   
    else if (typeof(positiveInteger1) != 'number' || typeof(positiveInteger2) != 'number'){
        return "ERROR";
    }

    let sum = 0;
    if (positiveInteger1 > positiveInteger2){
        for (i=positiveInteger1; i>=positiveInteger2; i--){
            sum += i;
        }
    }
    else if (positiveInteger1 < positiveInteger2 ){
        for (i=positiveInteger2; i>=positiveInteger1; i--){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

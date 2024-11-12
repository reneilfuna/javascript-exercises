const sumAll = function(positiveInteger1, positiveInteger2) {

    if (positiveInteger1 < 0 || positiveInteger2 < 0)
        return "ERROR";
    else if (Number.isInteger(positiveInteger1) == false || Number.isInteger(positiveInteger2) == false ){
        console.log("error");
        return "ERROR";
    }   
    else if (typeof(positiveInteger1) != 'number' || typeof(positiveInteger2) != 'number'){
        console.log("error");
        return "ERROR";
    }

    let sum = 0;
    console.log("start:")
    if (positiveInteger1 > positiveInteger2){
        console.log("step a")
        for (i=positiveInteger1; i>=positiveInteger2; i--){
            sum += i;
            console.log(sum);
        }
    }
    else if (positiveInteger1 < positiveInteger2 ){
        console.log("step b")
        for (i=positiveInteger2; i>=positiveInteger1; i--){
            console.log(i)
            sum += i;
            console.log(sum);
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(string, num) {
    if (num<0){
        return "ERROR";
    }
    else if (num==0){
        return '';
    }
    else{
        let repeatedString = string;
        for (i=0; i<num-1; i++){
            repeatedString = repeatedString.concat(string)
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
    //Function takes a string and then reverses the string.
    const reversedString = [];
    // Loop through each character in the string
    for (i=0; i<string.length; i++) {
        // Read the character
        char = string[i];
        // Push character into an array
        reversedString.unshift(char)
    }
    // Convert array toString
    finalResult = reversedString.join('');

    // Return reverseString
    return finalResult;
};

// Do not edit below this line
module.exports = reverseString;

const reverseString = function(string) {
    const words = string.split('');
    let reverseWords = "";

    for(let i= words.length-1; i >= 0; i--){
            reverseWords += words[i];
    }
    return reverseWords;
};

// Do not edit below this line
module.exports = reverseString;

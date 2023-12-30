const repeatString = function(string, repetitions) {
    let repeatedString = "";
    if(repetitions<0){
        return "ERROR";
    }else{
        for(let i = 0; i< repetitions; i++){
            repeatedString += string;
        }
        return repeatedString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;

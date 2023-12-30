const sumAll = function(numberA, numberB) {
    
    if(numberA < 0 || typeof(numberA) != "number" || typeof(numberB) != "number"){
        return "ERROR";
    }

    let sum = 0;
    let start = numberA;
    let end = numberB;

    if(numberA > numberB){
        start = numberB;
        end = numberA;
    }

    for (let index = start; index <= end; index++) {
        sum += index; 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

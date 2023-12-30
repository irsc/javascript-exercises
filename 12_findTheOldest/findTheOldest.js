const findTheOldest = function(array) {

    let thisYear = (new Date()).getFullYear();

    const sortedArray = array.sort((a,b)=>{
        let aYob = a.yearOfBirth;
        let bYob = b.yearOfBirth;
        let aYod, bYod;
        if(!a.yearOfDeath){ 
            aYod = thisYear;
        }else{
            aYod = a.yearOfDeath;
        }

        if(!b.yearOfDeath){ 
            bYod = thisYear;
        }else{
            bYod = b.yearOfDeath;
        }

        return  (bYod -bYob) -(aYod - aYob);
    });

    return sortedArray[0];

};

// Do not edit below this line
module.exports = findTheOldest;

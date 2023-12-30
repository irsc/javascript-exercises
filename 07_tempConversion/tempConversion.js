const convertToCelsius = function(temp) {
    /* let celsius = (temp -32)*5/9;

    return Number.isInteger(celsius) ? celsius : Math.round(celsius*10)/10; */

    return Math.round((temp -32)*5/9*10)/10;
  
};

const convertToFahrenheit = function(temp) {
    let fahr = 9/5*temp +32;

    return Number.isInteger(fahr) ? fahr : Math.round(fahr*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

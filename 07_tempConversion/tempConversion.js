const convertToCelsius = function(number) {
    let fahrenheit = ((number-32) * 5)/9;
    fahrenheit = fahrenheit.toFixed(1);
    return parseFloat(fahrenheit);
};

const convertToFahrenheit = function(number) {
  let celsius = ((number * 9)/5) + 32;
  celsius = celsius.toFixed(1);
  return parseFloat(celsius);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

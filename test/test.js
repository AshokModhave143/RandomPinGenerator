/**
 * Import Libraries and dependencies
 */
const {generateRandomPins} = require('../index');
const configData = require('../config/config.json');

/**
 * Call generateRandomPins function
 * @configData - this configuration has default value as "pinLength": 4, "pinBunchSize": 1000
 * you can change those values as per your need
 */
//Config data
console.log(configData);

//Test generateRandomPins with custom configuration - {"pinLength": 6, "pinBunchSize": 10}
console.log(generateRandomPins(configData));

//Test generateRandomPins with default configuration - {"pinLength": 4, "pinBunchSize": 1000}
console.log(generateRandomPins());

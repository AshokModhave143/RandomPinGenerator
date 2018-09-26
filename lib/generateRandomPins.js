'use strict';

/**
 * Generate random number of fixed length
 * @param {*} length number with how many digits you want to generate
 */
const randomFixedInteger = (length) => {
    return Math.floor(
        Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) -
            Math.pow(10, length - 1) - 1)
    );
};

/**
 * Check if pin already exists in the bucket
 * @param {*} bucket bucket list of pins
 * @param {*} pin pin to search in bucket
 * return true - if duplicate found
 *        false - duplicate not found
 */
const isDuplicatePin = (bucket, pin) => {
    return true;
};
/**
 * Check if consecutive digit in number repeats.
 * @param {*} pin 
 * return true - if repeatation found
 *        false - if no repeatation found
 */
const isNumberRepeatationExists = (pin) => {
    //let r = (/([0-9]).*?\1/).test(pin);        
    // console.log(pin + " : " + r);
    // return r;

    const digitArray = pin.toString().split("").map(x => Number(x));
    for (let i = 0; i < digitArray.length - 1; i++) {
        if (digitArray[i] == digitArray[i + 1]) {
            return true;
        }
    }
    return false;
};

/**
 * Checks if number sequence is increasing
 * @param {Number} numbers - a sequence of input numbers
 * @return {Boolean} - true if given sequence is increasing, false otherwise
 * return true - if number increasing number sequence found
 *        false - no increasing sequence
 */
const isNumberSequenceExists = (pin) => {
    const numbers = pin.toString().split("").map(x => Number(x));
    let cnt = 0;

    //console.log("Length : " + numbers.length);
    if (numbers.length < 2) {
        return false;
    }
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[j] + 1 == (numbers[j + 1])) {
                cnt++;
            }
            if (cnt >= 3) {
                return true;
            }
            //console.log( i + " : " + j + " : " + cnt);
        }
    }
    return false;
};

/**
 * Create a Pin bucket and add unqiue, valid and matching criteria pin
 * @param {*} count - Number of pins you want to generate
 * @param {*} length - length of pin
 * return an array of pins
 */
const getPinBucket = (count, length) => {
    let pinBucket = new Set(),
        loopCount = 0;

    while (pinBucket.size < count) {
        let randNumber = randomFixedInteger(length);
        if (!isNumberRepeatationExists(randNumber)) {
            if (!isNumberSequenceExists(randNumber)) {
                pinBucket.add(randNumber);

                // if(!isDuplicatePin(pinBucket, randNumber)){
                //     pinBucket.add(randNumber);
                // }
            }
        }
        loopCount++;
    }
    //console.log("Loop for :" + loopCount);

    //return Set as an Array
    return Array.from(pinBucket);
};

/**
 * Main entry function for genrating Random pin batch
 * Defines count = 1000 pins batch and length - ping length
 */
const generateRandomPins = exports.generateRandomPins = (data) => {
    const count = data && data.pinBunchSize ? data.pinBunchSize : 1000,
        length = data && data.pinLength ? data.pinLength : 4;
    const pinList = getPinBucket(count, length);
    return pinList;
};

/**
 * Export generateRandomPins function
 */
module.exports = {
    generateRandomPins,
    randomFixedInteger,
    isNumberRepeatationExists,
    isNumberSequenceExists
};
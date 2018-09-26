/**
 * Import Libraries and dependencies
 */
import { generateRandomPins, isNumberRepeatationExists, isNumberSequenceExists } from '../lib/generateRandomPins';
import assert from 'assert';

/**
 * Test cases
 */
describe('generate random pin batch function', ()=>{
    let pinBucket = [];
    it('should generate pin batch of 1000', ()=> {
        pinBucket = generateRandomPins();
        console.log(pinBucket.length);
        assert.equal(pinBucket.length, 1000);
    });
    it('should have pin 4 digit', ()=> {
        let pin = 1283;
        assert.equal(pin.length == 4, false);
    });
    it('should fail if not have pin 4 digit', ()=> {
        let pin = 183;
        assert.equal(pin.length == 4, false);
    });
    it('should not contain duplicate pins', ()=> {
        let isDuplicatesAvail = (new Set(pinBucket)).size != pinBucket.length;
        assert.equal(isDuplicatesAvail, false);
    });
    it('should fail when contain duplicate pins', ()=> {
        let pbucket = [1451, 5623, 7132, 1451];
        let isDuplicatesAvail = (new Set(pbucket)).size != pbucket.length;
        assert.equal(isDuplicatesAvail, true);
    });
    it('should not contain two consecutive digits same', ()=> {
        let pin = 1324; 
        assert.equal(isNumberRepeatationExists(pin), false);
    });
    it('should fail if contain two consecutive digits same', ()=> {
        let pin = 1124; 
        assert.equal(isNumberRepeatationExists(pin), true);
    });
    it('should not contain 3 consecutive digits incremental', ()=> {
        let pin = 1432;
        assert.equal(isNumberSequenceExists(pin), false);
    });
    it('should fail if contain 3 consecutive digits incremental', ()=> {
        let pin = 1534;
        assert.equal(isNumberSequenceExists(pin), true);
    });
});


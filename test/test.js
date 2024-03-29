function sum(a, b){ return b += a}; // would make a method but since I cant use super with mocha I must resort to this

class CashRegister {


	ringUp(){
		cashRA.push(   arguments[0]   )
		return 'true'
	}
	getMax(){
		return Math.max(...cashRA)
	}
	getMin(){
		return Math.min(...cashRA)
	}
	getMean(){
		return cashRA.reduce(sum)/cashRA.length
	}
	getMode(){
		cashRA.map(x => {
			if(   cashRAMO[x] === undefined   ){
				cashRAMO[x] = 0
			}
			else{
				cashRAMO[x] += 1
			}
		})
		cashRAMOA = Object.values(   cashRAMO   )
    	cashModeVal = cashRAMOA.indexOf(   Math.max(   ...cashRAMOA   )   )
    	cashRAMOA = Object.keys(cashRAMO)
		return cashRAMOA[cashModeVal]
	}

}
var cashRA = []
var cashRAMO = {} // cashRA Mode Object helps to determine the mode for the object
var cashRAMOA //Object.values used to find the mode
var cashModeVal; //int representing the interger val for the mode
var a; //used for the inital length
var b; //used for the final length
var testRAMO = {} //used to test getMode
var testRAMOA //Object.values used to find the mode
var modeVal; //int representing the interger val for the mode
  
const assert = require('assert');
const register = new CashRegister();
describe('CashRegister', function() {
  describe('#ringUp()', function() {
    it('should push the integer to an array cashRA', function() {
    	a =  cashRA.length
    	register.ringUp(2)
    	assert.equal(   cashRA.length, a+1 );
    });
  });
});

describe('CashRegister', function() {
  describe('#getMax()', function() {
    it('should find the max', function() {
    	register.ringUp(3)
    	assert.equal(   register.getMax(), Math.max(...cashRA)   );
    });
  });
});

describe('CashRegister', function() {
  describe('#getMin()', function() {
    it('should find the min', function() {
    	assert.equal(   register.getMin(), Math.min(...cashRA)   );
    });
  });
});


describe('CashRegister', function() {
  describe('#getMean()', function() {
    it('it should divide the sum by the length returning the mean', function() {
    	assert.equal(   register.getMean(), cashRA.reduce((a, b)=>{ return b += a})/cashRA.length   );
    });
  });
});

describe('CashRegister', function() {
  describe('#getMode()', function() {
    it('it should grab the mode by returing the key of the greatest value from the object ', function() {
    	register.ringUp(2)
		cashRA.map(x => {
			if(   testRAMO[x] === undefined   ){
				testRAMO[x] = 0
			}
			else{
				testRAMO[x] += 1
			}
		})
		testRAMOA = Object.values(testRAMO)
    	modeVal = testRAMOA.indexOf(   Math.max(   ...testRAMOA   )   )
    	testRAMOA = Object.keys(testRAMO)
    	assert.equal(   register.getMode(),testRAMOA[modeVal]   )
    });
  });
});

/*assumptions
	0. the ringUp function requires an array
	1. I assumme that ringUp only adds one int at a time
		a. I assume this is all that ringUp needs to do
	2. I assume I can use Math.max and Math.min to easily find the max and min values
	3. for the mode it will be used as an object the key for the items in the cashRA, values, how many times it appears
*/

// const register = new CashRegister()
register.ringUp(1)
register.ringUp(0)
register.getMax() // => 1
register.getMin() // => 0
register.getMean() // => 0.5
register.getMode() // => 1 (1 or 0 is acceptable)
register.ringUp(3)
register.ringUp(1)
register.getMax() // => 3
register.getMin() // => 0
register.getMean() // => 1.25
register.getMode() // => 1
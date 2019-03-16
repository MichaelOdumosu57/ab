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

}      
var cashRA = []
var a; //used for the inital length
var b; //used for the final length

  
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

/*assumptions
	0. the ringUp function requires an array
	1. I assumme that ringUp only adds one int at a time
		a. I assume this is all that ringUp needs to do
	2. I assume I can use Math.max and Math.min to easily find the max and min values
*/
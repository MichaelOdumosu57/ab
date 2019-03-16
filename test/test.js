class CashRegister {


	ringUp(){
		cashRA.push(   arguments[0]   )
		return 'true'
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



/*assumptions
	0. the ringUp function requires an array
	1. I assumme that ringUp only adds one int at a time
*/
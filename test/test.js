  class CashRegister {


      ringUp(){
      	return 'true'
      }


  }      

const assert = require('assert'); 
const register = new CashRegister();
describe('CashRegister', function() {
  describe('#ringUp()', function() {
    it('should return true', function() {
      assert.equal(register.ringUp(), 'true');
    });
  });
});

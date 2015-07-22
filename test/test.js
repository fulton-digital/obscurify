var obscurify = require('../index')();
var assert = require("assert");

describe('obscurify', function () {

  describe('#psuedoEncrypt(input)', function () {

    it('should give the same output for the same input', function(){
      assert.equal(obscurify.pseudoEncrypt(1500), obscurify.pseudoEncrypt(1500));
    });

    it('should be reversible', function () {
      for (var i = -100; i <= 100; i++) {
        var output = obscurify.pseudoEncrypt(i);
        var inverse = obscurify.pseudoEncrypt(output);
        assert.equal(i, inverse);
      }
    });

  });

});
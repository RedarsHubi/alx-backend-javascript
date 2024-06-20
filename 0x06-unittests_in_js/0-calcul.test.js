const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('returns 3', function () {
      assert.strictEqual(calculateNumber(1.9, 1.1), 3);
    });
    it('returns 0 when inputs are -0.4 and 0.4', function () {
      assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
    });

    it('returns -2 when inputs are -1.6 and -0.4', function () {
      assert.strictEqual(calculateNumber(-1.6, -0.4), -2);
    });
  })

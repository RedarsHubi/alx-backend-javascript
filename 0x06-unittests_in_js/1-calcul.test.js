const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    it('returns 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1.9, 1.1), 3);
    });
    it('returns 5', function () {
      assert.strictEqual(calculateNumber('SUBSTRACT', 4.6, 0.4), 5);
    });

    it('returns -2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -0.6), 2);
    });
  })

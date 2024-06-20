const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('returns 3', function () {
        assert.strictEqual(calculateNumber(1.9, 1.1), 3);
    });
  })

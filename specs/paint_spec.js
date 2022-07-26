const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function(){
    let paint;
    beforeEach(function() {
        paint = new Paint(50)
    });

    it ("should have a have 50 litres", function(){
    const actual = paint.litres;
    assert.strictEqual(actual, 50)
    });

    it ("should be full", function(){
        const actual = paint.isEmpty
        assert.strictEqual(actual, false)
    })
})


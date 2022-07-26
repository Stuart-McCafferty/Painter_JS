const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');

describe('Decorator', function(){
    let decorator;
    beforeEach(function() {
        decorator = new Decorator("Jeff")
    });

    it ("should have a name", function(){
    const actual = decorator.name;
    assert.strictEqual(actual, "Jeff")
    });

    it ("should have no paint", function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, [])
    })

    describe('Paints', function(){
        it("should add to stock", function (){
            paint = new Paint(50);
            decorator.addToStock(paint);
            const actual = decorator.stockLength();
            assert.strictEqual(actual,1);
        })
        it("should return total litres", function(){
            paint = new Paint(50);
            paint1 = new Paint(55);
            decorator.addToStock(paint);
            decorator.addToStock(paint1);
            const actual = decorator.calculateTotalLitres();
            assert.strictEqual(actual, 105);
        })
    })
})

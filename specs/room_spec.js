const assert = require('assert');
const Room = require('../room');

describe('Room', function(){
    let room;
    beforeEach(function() {
        room = new Room(100)
    });

    it ("should have a size", function(){
    const actual = room.size;
    assert.strictEqual(actual, 100)
    });

    it ("shoudl not be painted", function(){
        const actual = room.isPainted
        assert.strictEqual(actual, false)
    })
})
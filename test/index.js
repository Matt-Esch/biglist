var test = require("tape")

var biglist = require("../index")

test("biglist is a function", function (assert) {
    assert.equal(typeof biglist, "function")
    assert.end()
})

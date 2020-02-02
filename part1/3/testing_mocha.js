"use strict";

//behavior driven development
describe("pow", function() {
  before(() => console.log("It shows before all tests"));
  after(() => console.log("it shows after all tests"));
  beforeEach(() => console.log("it shows before each test"));
  afterEach(() => console.log("it shows after each test"));

  // .equal - ==
  // .strictValue - ===
  // .notEqual .notStrictEqual - != !==
  // .isTrue - === true
  // .isFalse - === false
  // https://www.chaijs.com/api/assert/


  it("it should pow n ** e", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 3), 27);
  });

  // it.only - isolate this test, all others are ignored
  // it.only("it should pow n ** e", function() {
  //   assert.equal(pow(2, 3), 8);
  //   assert.equal(pow(3, 3), 27);
  // });

  it("should 2 ** 4 = 16", function() {
    assert.equal(pow(2, 4), 16);
  });

  it("NaN with negotive digits", function() {
    assert.isNaN(pow(2, -1));
  });

  it("NaN with float digits", function() {
    assert.isNaN(pow(2, 2.5));
  })

  describe("using function to test tests", function() {
    function makeTest(x) {
      let expected = x * x * x * x;
      it(`${x} pow 4 = ${expected}`, function() {
        assert.equal(pow(x, 4), expected);
      });
    }

    for (let i = 0; i < 50; i++) {
      makeTest(i);
    }
  });


});

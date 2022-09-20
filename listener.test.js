const {pattern} = require("./listener");

test("return true if string match regex", ()=>{
    var match = pattern(/[-]{5}/, "jhdjoje-----");
    expect(match).toBe(true);
})

test("return false if string mismatch regex", ()=>{
    var match = pattern(/[-]{5}/, "jhdjoje---");
    expect(match).toBe(false);
})
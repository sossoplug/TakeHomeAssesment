const { food, vomit, sleep, philosophy, need, hate, i, you, rejoice, newSentence } = require('./speaker_utils');


test("should return -----B--B-K---Z", ()=>{
    const string = food();
    expect(string).toBe("-----" + "B--B-K---Z");
});

test("should return -----BBKZ", ()=>{
    const string = vomit();
    expect(string).toBe("-----" + "BBKZ");
});

test("should return -----B-K-RKK---ZZZ", ()=>{
    const string = sleep();
    expect(string).toBe("-----" + "B-K-RKK---ZZZ");
});

test("should return -----B-K-RKK---ZZZ", ()=>{
    const string = philosophy();
    expect(string).toBe("-----" + "BKR-KK-ZZZ");
});

test("should return -----ZZ-KK", ()=>{
    const string = need();
    expect(string).toBe("-----" + "ZZ-KK");
});

test("should return -----KK-ZZ", ()=>{
    const string = hate();
    expect(string).toBe("-----" + "KK-ZZ");
});

test("should return -----L-R-Z", ()=>{
    const string = i();
    expect(string).toBe("-----" + "L-R-Z");
});

test("should return -----Z-R-L", ()=>{
    const string = you();
    expect(string).toBe("-----" + "Z-R-L");
});

test("should return -----ZZKK", ()=>{
    const string = rejoice();
    expect(string).toBe("-----" + "ZZKK");
});

test("should return ----------", ()=>{
    const string = newSentence();
    expect(string).toBe("----------");
});
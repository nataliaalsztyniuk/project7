const add = require("./calc");

test('adds 1 + 2 to equal 3', () =>{
    const n1 = 1;
    const n2 = 2;
    const res = add(1,2)
    expect(res).toBe(3);
});
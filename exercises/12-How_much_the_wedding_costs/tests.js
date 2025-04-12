
let rewire = require('rewire');
let fs = require('fs');
let path = require('path');

it("Create an if statement", function () {
    const app_content = fs.readFileSync(path.resolve(__dirname, './temporal.js'), 'utf8');
    expect(app_content).toMatch(/if\s*/);
  });

it('The function getPrice must exist', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice).toBeTruthy();
});

it('When tested for 50 it should return 4000', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(50)).toBe(4000);
});

it('When tested for 51 it should return 10000', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(51)).toBe(10000);
});
it('When tested for 100 it should return 10000', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(100)).toBe(10000);
});
it('When tested for 101 it should return 15000', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(101)).toBe(15000);
});
it('When tested for 200 it should return 15000', function () {
    
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(200)).toBe(15000);
});
it('When tested for 201 it should return 20000', function () {
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(201)).toBe(20000);
});
it('When tested for 400 it should return 20000', function () {
    const app = rewire('./temporal.js');
    const getPrice = app.__get__('getPrice')
    expect(getPrice(400)).toBe(20000);
});

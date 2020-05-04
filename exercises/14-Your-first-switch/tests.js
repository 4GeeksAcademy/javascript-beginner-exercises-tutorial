const rewire = require('rewire');

const file = rewire("./app.js");
const getColor = file.__get__('getColor');
test('function getColor should exist', function () {
    expect(getColor).toBeTruthy();
});

test(`When calling getColor('red') it should return true`, function () {
    expect(getColor('red')).toBe(true);
});

test(`When calling getColor('green') it should return true`, function () {
    expect(getColor('green')).toBe(true);
});

test(`When calling getColor('blue') it should return true`, function () {
    expect(getColor('blue')).toBe(true);
});

test(`When calling getColor('pink') it should return false`, function () {
    expect(getColor('pink')).toBe(false);
});

const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
let _buffer = "";

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('Array methods exercise', function () {
    afterEach(() => { jest.resetModules(); });

    it('Should have an array called "students"', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+students\s*=/);
    });

    it('Should use push() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.push\(/);
    });

    it('Should use shift() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.shift\(/);
    });

    it('Should print the array length and final array', function () {
        _buffer = "";
        require('./app.js');
        const logs = _buffer.trim().split('\n');
        expect(logs.length).toBeGreaterThanOrEqual(2);
    });
});

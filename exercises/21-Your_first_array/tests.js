
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
let _buffer = "";
let _log = console.log;

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('Array exercise', function () {
    afterEach(() => { jest.resetModules(); });

    it('Should have an array called "colors"', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+colors\s*=\s*\[/);
    });

    it('Should print at least 3 elements from the colors array', function () {
        _buffer = "";
        const { colors } = require('./app.js');
        const logs = _buffer.trim().split('\n');
        expect(logs.length).toBeGreaterThanOrEqual(3);
    });

    it('Should print the array itself', function () {
        _buffer = "";
        require('./app.js');
        expect(_buffer).toMatch(/,/); // arrays have commas when printed
    });
});

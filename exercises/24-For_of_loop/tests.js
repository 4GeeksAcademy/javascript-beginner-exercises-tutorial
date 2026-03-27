
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
let _buffer = "";

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('For...of loop exercise', function () {
    afterEach(() => { jest.resetModules(); });

    it('Should have an array called "numbers"', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+numbers\s*=/);
    });

    it('Should use for...of loop', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/for\s*\(\s*let\s+\w+\s+of\s+/);
    });

    it('Should iterate through numbers and print them multiplied by 2', function () {
        _buffer = "";
        require('./app.js');
        const logs = _buffer.trim().split('\n');
        expect(logs.length).toBeGreaterThanOrEqual(5);
    });

    it('Should also iterate through a string', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+word\s*=\s*"/);
    });
});

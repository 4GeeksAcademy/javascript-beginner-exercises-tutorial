
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
let _buffer = "";

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('Object exercise', function () {
    afterEach(() => { jest.resetModules(); });

    it('Should have an object called "user"', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+user\s*=/);
    });

    it('Should have at least 3 properties in the user object', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/:\s*\w+/g);
    });

    it('Should access properties using dot notation', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/user\.\w+/);
    });

    it('Should print the user object and its properties', function () {
        _buffer = "";
        require('./app.js');
        const logs = _buffer.trim().split('\n');
        expect(logs.length).toBeGreaterThanOrEqual(4);
    });
});

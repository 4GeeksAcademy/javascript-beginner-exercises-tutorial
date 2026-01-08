
const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
let _buffer = "";

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('String methods exercise', function () {
    afterEach(() => { jest.resetModules(); });

    it('Should have a string variable called "text"', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/let\s+text\s*=/);
    });

    it('Should use string methods like length, toUpperCase, toLowerCase', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.length|\.toUpperCase\(\)|\.toLowerCase\(\)/);
    });

    it('Should use indexOf() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.indexOf\(/);
    });

    it('Should use slice() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.slice\(/);
    });

    it('Should use includes() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.includes\(/);
    });

    it('Should use replace() method', function () {
        const appPath = path.join(__dirname, './app.js');
        const appContent = fs.readFileSync(appPath, 'utf8');
        expect(appContent).toMatch(/\.replace\(/);
    });

    it('Should print multiple values', function () {
        _buffer = "";
        require('./app.js');
        const logs = _buffer.trim().split('\n');
        expect(logs.length).toBeGreaterThanOrEqual(7);
    });
});

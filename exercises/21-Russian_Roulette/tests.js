const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

jest.dontMock('fs');
let _buffer = "";
let _log = console.log;
const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


describe('All the javascript should match', function () {
    // jest.resetModules();

    const app = rewire("./app");
    const fireGun = app.__get__("fireGun");
    const firePosition = app.__get__("firePosition");

    test('The function "fireGun" should exist', () => {
        const file = rewire("./app.js");
        const sum = file.__get__("fireGun");
        expect(sum).not.toBe(undefined);
    })
    it('Use "if" conditional;', function () {
        const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
        expect(app_content).toMatch(/if(\s*)\(/);
    });

    it('If fireGun() is false, message should be "Keep playing!"', function () {
            for (let i = 1; i <= 6; i++) {
                if (i === firePosition) {
                    expect(fireGun(i)).toContain("You're dead!");
                }
                else {
                    expect(fireGun(i)).toContain("Keep playing!");
                }
            }
    });
});

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

    it('The function fireGun should exist', function () {
        expect(fireGun).toBeTruthy();
    });

    it('The function fireGun should return something', function () {
        expect(fireGun()).not.toBe(undefined)
    });

    it('If fireGun() is false, message should be "Keep playing :)"', function () {
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

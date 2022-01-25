const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

jest.dontMock('fs');
let _buffer = "";
let _log = console.log;

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");


describe('All the javascript should match', function () {
    // jest.resetModules();

    const app = rewire("./app");
    const fireGun = app.__get__("fireGun");
    const bulletPosition = app.__get__("bulletPosition");

    it('The function fireGun should exist', function () {
        expect(fireGun).toBeTruthy();
    });

    it('The function fireGun should return something', function () {
        expect(fireGun()).toBeTruthy();
    });

    it('If fireGun() is false, message should be "Keep playing :)"', function () {
        for (var i = 1; i <= 6; i++) {
            if (i === bulletPosition) {
                expect(fireGun(i)).toContain("You're dead!");
            }
            else {
                expect(fireGun(i)).toContain("Keep playing!");
            }
        }
    });

    // it('fireGun() most contain the spinner position as parameter', function () {
    //     const file = rewire('./app.js')
    //     expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Keep\sPlaying\!/) || expect.stringMatching(/You\'re\sdead\!/));
    // });


    // it('console.log() have been called with a number', function () {
    //     expect(console.log).toHaveBeenCalledWith(expect.any(Number));
    //    });

    // test("Function return the expected", function(){
        
    //     expect(fireGun()).toMatch(/Keep\sPlaying\!/gm) || expect(fireGun()).toMatch(/You\'re\sdead\!/gm)
    //   });

});

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
    const  fireGun = app.__get__("fireGun"); 
    const  bulletPosition = app.__get__("bulletPosition"); 
    
        it('If fireGun() is false, message should be "Keep playing :)"', function () {
            for(var i = 1; i <= 6; i++){
                if(i === bulletPosition){
                    expect(fireGun(i)).toContain("You're dead!");
                }
                else
                {
                    expect(fireGun(i)).toContain("Keep playing!"); 
                }
            }
        });
    });
    
describe('All tests', () => {
    afterEach(() => {
        jest.resetModules();
    });

    describe('Testing with 50', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["50"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");

        })
        it("If there are less than or equal to 50 km (50), we answer: I'm parking. I'll see you right now", function () {
            expect(console.log).toHaveBeenCalledWith("I'm parking. I'll see you right now");

        });

        it('Your algorithm should use console.log at least one time, if you believe you are using it make sure it\'s not being conditionally ignored', function () {
            expect(console.log.mock.calls.length > 0).toBe(true);
        });
    })

    describe('Testing with 49', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["49"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");
        })
        it("If there are less than or equal to 50 km (49), we answer: I'm parking. I'll see you right now", function () {

            expect(console.log).toHaveBeenCalledWith("I'm parking. I'll see you right now");
        });
    })

    describe('Testing with 99', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["99"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");
        })
        it("If there are more than 50 km, but less or equal to 100 km (99), we answer:  We'll be there in 5 minutes", function () {

            expect(console.log).toHaveBeenCalledWith("We'll be there in 5 minutes");
        });
    })
    describe('Testing with 100', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["100"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");
        })  
        it("If there 100 km left to go, we answer:  We'll be there in 5 minutes", function () {

            expect(console.log).toHaveBeenCalledWith("We'll be there in 5 minutes");
        });
    })
    describe('Testing with 101', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["101"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");
        })  
        it('If there are more than 100 km left to go, we answer:  We still have a bit of driving left to go', function () {

            expect(console.log).toHaveBeenCalledWith("We still have a bit of driving left to go");
        });
    })
    describe('Testing with 200', () => {
        beforeEach(() => {
            //here we are going to store and accumulate (concatenate) all the console log's from the exercise
            let _buffer = "";
            let _log = console.log;
            // lets override the console.log function to mock it,
            // but we are also going to save what supposed to be the ouput of the console inside _buffer
            global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
            const stdin = ["200"]
            global.prompt = jest.fn(() => stdin.shift());
            const file = require("./app.js");
        })  
        it('If there are more than 100 km left to go, we answer:  We still have a bit of driving left to go', function () {

            expect(console.log).toHaveBeenCalledWith("We still have a bit of driving left to go");
        });
    })




})



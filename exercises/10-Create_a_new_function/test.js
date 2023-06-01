const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test('shortIntroduction function exists', () => {
  const file = rewire("./app.js");
  const shortIntroduction = file.__get__('shortIntroduction');
  expect(typeof shortIntroduction).toBe('function');
});

test('shortIntroduction function requires 3 arguments', () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
  const shortIntroductionRegex = /function\s*shortIntroduction\s*\(\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\)\s*{/gm;
  const hasProperParameters = shortIntroductionRegex.test(file.toString());
  expect(hasProperParameters).toBeTruthy();
});

test("shortIntroduction function creates correct introduction", ()=>{
    // read the content of the file
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');

    // Use regex pattern to check for the correct console.log within the function using template literals
    const patternTemplate = /console\.log\(\s*`Hello! my name is \${\s*\w+\s*}, my profession is \${\s*\w+\s*}\. I am \${\s*\w+\s*} years old\.`\s*\)\s*;?/gm;
    
    // Use regex pattern to check for the correct console.log within the function using + operator
    const patternPlus = /console\.log\(\s*"Hello! my name is "\s*\+\s*\w+\s*\+\s*", my profession is "\s*\+\s*\w+\s*\+\s*". I am "\s*\+\s*\w+\s*\+\s*" years old."\s*\)\s*;?/gm;
    
    const hasCorrectConsoleLogTemplate = patternTemplate.test(file.toString());
    const hasCorrectConsoleLogPlus = patternPlus.test(file.toString());

    expect(hasCorrectConsoleLogTemplate || hasCorrectConsoleLogPlus).toBeTruthy();
});



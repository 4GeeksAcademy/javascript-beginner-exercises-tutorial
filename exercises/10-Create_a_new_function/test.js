const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

test('shortIntroduction function exists', () => {
  const file = rewire("./app.js");
  const shortIntroduction = file.__get__('shortIntroduction');
  expect(typeof shortIntroduction).toBe('function');
});

test("shortIntroduction function returns correct introduction", ()=>{

    const file = rewire("./app.js");
    const shortIntroduction = file.__get__('shortIntroduction');
    
    expect(shortIntroduction("Bob", "developer", 25)).toBe("Hello! my name is Bob, my profession is developer. I am 25 years old.");
    expect(shortIntroduction("John", "CTO", 43)).toBe("Hello! my name is John, my profession is CTO. I am 43 years old.");
    expect(shortIntroduction("Tom", "lead developer", 28)).toBe("Hello! my name is Tom, my profession is lead developer. I am 28 years old.");
    expect(shortIntroduction("Alberto", "CIO", 32)).toBe("Hello! my name is Alberto, my profession is CIO. I am 32 years old.");
});

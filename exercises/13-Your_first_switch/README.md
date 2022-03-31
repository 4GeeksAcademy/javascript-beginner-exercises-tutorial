# `13` Your First Switch Statement

We can use another form of conditional called a **switch statement**.  A switch statement evaluates an expression and matches it to a `case` clause, executing the statements therein.  Here is a basic example:

```js
const expr = 'One';
switch (expr) {
    case 'One':
        console.log('1');
        break;
    case 'Zero':
        console.log('0');
        break;
    default:
        console.log(`Does not compute.`);    
}
```

Imagine that your software is running the inventory of a shoe store. The client needs to know what colors a particular shoe is available in.

## 📝 Instructions:

1. Complete the switch statement with 3 cases for a shoe coming in the following colors: `red`, `green` and `blue`.

2. The function needs to return `true` if the user input matches one of the cases listed in the switch statement, `false` otherwise.

## 💡 Hints:

+ You may need to convert the user input to all lowercase or all uppercase lettering to prevent discrepancies.  Click the following to help you accomplish this:

+ For all uppercase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

+ For all lowercase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

+ More on switch statements: http://www.w3schools.com/js/js_switch.asp

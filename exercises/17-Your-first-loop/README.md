# `17` Your First Loop

Loops and iterations allow you to repeat a process quickly and efficiently. The two most commonly used forms are `for` loops and `while` loops. 

`for` loops looks like this:
```js
for (initialExpression; conditional; incrementalExpression) {
    ...statements;
}
```
Here is an example `for` statement:

```js
// a "for" loop
for (let i = 0; i < 10; i++) {
    console.log("Hello!")
}
```


`while` loops are similar in nature.  They look like this:

```js
initialExpression;
while (conditional) {
    ...statements;
    incrementalExpression;
}
```
And here is an example:

```js
let i = 0;
while (i < 10) {
    console.log("Goodbye!");
    i++;
}
```
As long as the `condition` is true, the loops will continue to repeat.  If the `condition` is false, the loop will exit.  Notice how both types of loops use the same pieces, just organized in a different manner.

## :pencil: Instructions:

Running the accompanying code will print the integers `0` through `99` to the console.

Change code so that it the integers `0` to `100`. You will then see it followed by `101` in green text on the console.

### :exclamation: IMPORTANT: 
*There is a repl.it classroom dedicated to Arrays.  We encourage you to complete those exercises after finishing this lesson. Once you are more comfortable, return here to continue.*
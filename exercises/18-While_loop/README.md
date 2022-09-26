# `18` The "while" Loop

As mentioned in a previous exercise, `while` loops are similar to `for` loops, just structured differently.  

Here it is again:

```js
initialExpression;
while (conditional) {
    ...statements;
    incrementalExpression;
}
```

Now, let's say we write the following `while` loop:

```js
let i = 0;
while (i < 10) {
    console.log("Goodbye!");
}
```

You may have experienced this yourself by now.  

Do you notice something is missing?  

We do not have an *incrementalExpression* in our loop.  This is a problem because we want to increment the variable `i` until we reach the desired value to exit the loop.  If we don't increment `i`, it stays stuck at `0`, leading to an infinite loop.  The program has crashed.

## 📝 Instructions:

1. Fix the `while` loop so that it does not lead to the program crashing via an infinite loop.

2. Print the numbers from `100` to `0` to the console. 

3. Return `counter` once it is `0`.

## 🔎  Important:

+ There are exercises dedicated to Arrays.  We encourage you to complete those [exercises](https://gitpod.io/#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) after finishing this one. *Once you are more comfortable, return here to continue.*
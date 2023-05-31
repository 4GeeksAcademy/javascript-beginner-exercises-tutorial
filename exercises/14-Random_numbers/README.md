# `14` Random Numbers

JavaScript comes with many very useful "pre-defined" functions that you can use. Such as:

```js
Math.random();
```

You can use the `Math.random()` function to get a pseudo-random decimal (also called a **floating-point**, **float**, or **double**) number. This floating-point number will be between 0 and a number `n` (inclusive of 0, but not of n).

The `Math.random()` function will return a random decimal number between 0 and 1, run the exercise as it is several times to test it.

## 📝 Instructions:

1. Please update the function code to make it return an integer (no decimals) number between 1 and 10.

## 💡 Hints:

+ `Math.random()` only returns decimal numbers from 0 to 1, and we need integer numbers from 1 to 10.

+ Multiply the `Math.random()` function by 10 to move the decimal point one slot to the right.

+ Use the `Math.floor()` function to remove the rest of the decimals and have only integers.

+ You can read how to use these two functions [here](https://www.w3schools.com/jsref/jsref_random.asp).


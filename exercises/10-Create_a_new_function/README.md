---
tutorial: "https://www.youtube.com/watch?v=N95pm7kv0a4"
---

# `10` Creating a New Function

As you know, functions are a useful block of code that can be reused as many times as you need. In the last exercise, you had a function that received two arguments (two inputs) and returned their sum.

Something Like this:

```js
function addNumbers(a, b){
  return a + b;
}
```

Javascript also comes with many "pre-defined" functions that you can use as well. For example:

```js
Math.random();
```

You can use the `Math.random()` function to get a pseudo-random decimal (also called a **floating-point**, **float**, or **double**) number.  This floating-point number will be between 0 and a number `n` (inclusive of 0, but not of n). As a matter of fact, every time you call `Math.random()`, it will return another random float.

## 📝  Instructions:

1. Create a function called `generateRandom()`, which generates a pseudo-random number between 0 and 9 every time it is called.

2. Use the Math.random() function to generate a random number

3. Use the Math.floor function to round down the randomly generated number.(We want a rounded number NOT A DECIMAL)

## 💡 Hint:

+ You can learn how to use these two functions [here](https://www.w3schools.com/jsref/jsref_random.asp).

    

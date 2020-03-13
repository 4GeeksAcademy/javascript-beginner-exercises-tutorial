# `11` Creating a New Function

As you know, functions are a useful block of code that you can re-use as many times as you wish. In the last exercise, you had a function that received two parameters (two inputs) and returned the sum of those. 

Like this:
```js
function addNumbers(a, b){
  return a + b;
}
```

But Javascript comes with a bunch of "pre-defined" functions that you can use. 

For example:
```js
Math.random();
```

You can use the **Math.random()** function to get a random decimal number between 0 and 1. Every time you call that function, it will return another random decimal number between 0 and 1.

## :pencil: Instructions:

* Please create a function called **generateRandom**, which generates a random number between 0 and 9 every time it is called.

### 💡 Hint:

* One possible solution involves using two predefined functions: the **Math.random()** and **Math.floor()** functions.
* You can find out more about this here:

    https://www.w3schools.com/jsref/jsref_random.asp
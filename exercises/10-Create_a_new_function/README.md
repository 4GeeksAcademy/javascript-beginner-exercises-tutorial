# `10` Creating a New Function

As you know, functions are a useful block of code that can be reused as many times as you need. In the last exercise, you had a function that received two arguments (two inputs) and returned their sum.

Something Like this:

```js
function addNumbers(a, b){
  return a + b;
}
```

We are going to go ahead and learn some more! Consider this function:

```js
function hello(myName) {
    console.log("Hello! my name is " + myName)
}

hello("Jose") // This will print "Hello! my name is Jose" in the console
```

In this block of code we are declaring a function which receives one argument, `myName` which is whatever string (ideally a name) that you choose when calling the function, this will then print in the console the string we declared in the body of the function which is `"Hello! my name is *myName*"` with whatever name we used.

## 📝 Instructions:

1. Complete the function called `littleIntroduction()`, which prints in the console a little introduction of you.

2. The function will ask for 3 arguments: `name`, `profession`, and `age`.

3. And they should be organized as follows: `Hello! my name is *name*, my profession is *profession*. I am *age* years old.`

4. Finally, call the function with the data in the correct order to finish the exercise.

## 💡 Hint:

+ Remember to use the plus (+) sign to concatenate different strings and variables in the `console.log()`. Also there are more ways to concatenate strings and variables, if you want to learn more, [click here](https://stackoverflow.com/questions/16600925/how-can-i-add-a-variable-to-console-log).

---
tutorial: "https://www.youtube.com/watch?v=prIqHDmw5r0"
---

# `21` Your First Array

An array is a list of values. Arrays are one of the most important data structures in programming because they allow us to store multiple values in a single variable.

Arrays are declared with square brackets `[]` and can hold any type of data:

```js
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, 3.14];
```

You can access each element in an array using its **index** (position). Remember that indices start at `0`:

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
```

## 📝 Instructions:

1. Create an array called `colors` with at least 3 color names as strings.
2. Use `console.log()` to print each color accessing it by its index position.
3. Print the array itself to the console.

## Example:

```js
let animals = ["dog", "cat", "bird"];
console.log(animals[0]); // "dog"
console.log(animals[1]); // "cat"
console.log(animals[2]); // "bird"
console.log(animals);    // ["dog", "cat", "bird"]
```

## 💡 Hint:

+ Remember: array indexes start at 0, not 1!
+ You can store any type of data inside an array.


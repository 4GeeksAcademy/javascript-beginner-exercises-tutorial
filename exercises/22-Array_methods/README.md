---
tutorial: "https://www.youtube.com/watch?v=prIqHDmw5r0"
---

# `22` Array Methods

Arrays have many built-in methods that allow us to manipulate them. The most common ones are:

- **`push()`**: Adds one or more elements to the end of an array
- **`pop()`**: Removes the last element from an array
- **`shift()`**: Removes the first element from an array
- **`unshift()`**: Adds one or more elements to the beginning of an array
- **`length`**: Property that returns the number of elements in an array

```js
let fruits = ["apple", "banana"];
fruits.push("orange");           // fruits is now ["apple", "banana", "orange"]
console.log(fruits.length);      // 3

let lastFruit = fruits.pop();    // removes "orange", lastFruit = "orange"
console.log(fruits);             // ["apple", "banana"]

fruits.unshift("grape");         // fruits is now ["grape", "apple", "banana"]
let firstFruit = fruits.shift(); // removes "grape", firstFruit = "grape"
```

## 📝 Instructions:

1. Create an array called `students` with 3 student names.
2. Add a new student name to the end using `push()`.
3. Remove the first student using `shift()`.
4. Print the length of the array.
5. Print the final array.

## Example:

```js
let team = ["Alice", "Bob"];
team.push("Charlie");  // ["Alice", "Bob", "Charlie"]
team.shift();          // ["Bob", "Charlie"]
console.log(team.length);  // 2
console.log(team);     // ["Bob", "Charlie"]
```

## 💡 Hint:

+ Methods are functions that belong to objects. Arrays are objects too!
+ `push()` and `unshift()` add elements, while `pop()` and `shift()` remove them.


---
tutorial: "https://www.youtube.com/watch?v=Y0LSuCI3Xv8"
---

# `24` For...of Loop

The `for...of` loop is a cleaner way to iterate through the elements of an array. Unlike the traditional `for` loop that uses an index, `for...of` gives you direct access to each element.

```js
let fruits = ["apple", "banana", "orange"];

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop (easier!)
for (let fruit of fruits) {
    console.log(fruit);
}
```

Both produce the same output, but `for...of` is more readable and simpler when you don't need the index.

You can use `for...of` with:
- Arrays
- Strings (iterates through each character)
- Any iterable object

```js
let word = "Hello";
for (let letter of word) {
    console.log(letter);  // H, e, l, l, o
}
```

## 📝 Instructions:

1. Create an array called `numbers` with at least 5 numbers.
2. Use a `for...of` loop to iterate through the array.
3. Inside the loop, print each number multiplied by 2.
4. Also create a string and use `for...of` to print each character.

## Example:

```js
let animals = ["cat", "dog", "bird"];
for (let animal of animals) {
    console.log(animal.toUpperCase());
}

let name = "Alice";
for (let char of name) {
    console.log(char);
}
```

## 💡 Hint:

+ `for...of` is perfect when you need to access the values, not the index.
+ `for...of` works with any iterable (arrays, strings, etc.).


---
tutorial: "https://www.youtube.com/watch?v=rRQnB3AYiF8"
---

# `25` String Methods

Strings have many built-in methods that allow us to manipulate and work with text. Here are the most common ones:

- **`length`**: Returns the number of characters in a string
- **`toUpperCase()`**: Converts the string to uppercase
- **`toLowerCase()`**: Converts the string to lowercase
- **`indexOf()`**: Returns the position of the first occurrence of a substring
- **`slice()`**: Extracts a part of a string
- **`includes()`**: Checks if a string contains a substring
- **`replace()`**: Replaces text in a string
- **`trim()`**: Removes whitespace from both ends

```js
let message = "Hello World";

console.log(message.length);                 // 11
console.log(message.toUpperCase());          // "HELLO WORLD"
console.log(message.toLowerCase());          // "hello world"
console.log(message.indexOf("World"));       // 6
console.log(message.slice(0, 5));            // "Hello"
console.log(message.includes("World"));      // true
console.log(message.replace("World", "JS")); // "Hello JS"
console.log("  spaces  ".trim());            // "spaces"
```

## 📝 Instructions:

1. Create a string variable with a sentence.
2. Print the length of the string.
3. Print the string in uppercase and lowercase.
4. Use `indexOf()` to find the position of a word.
5. Use `slice()` to extract part of the string.
6. Use `includes()` to check if a word exists in the string.
7. Use `replace()` to replace a word with another.

## Example:

```js
let text = "JavaScript is amazing";

console.log(text.length);                    // 21
console.log(text.toUpperCase());             // "JAVASCRIPT IS AMAZING"
console.log(text.indexOf("amazing"));        // 14
console.log(text.slice(0, 10));              // "JavaScript"
console.log(text.includes("amazing"));       // true
console.log(text.replace("amazing", "fun")); // "JavaScript is fun"
```

## 💡 Hint:

+ Strings are immutable - methods return new strings, they don't modify the original.
+ `indexOf()` returns -1 if the substring is not found.
+ Many string methods are case-sensitive!


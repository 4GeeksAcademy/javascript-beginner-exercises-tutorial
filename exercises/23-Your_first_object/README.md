---
tutorial: "https://www.youtube.com/watch?v=X0ujO1vQ5RE"
---

# `23` Your First Object

An object is a way to store related data and functionality together. Objects are created using curly braces `{}` and contain **key-value pairs**.

```js
let person = {
    name: "John",
    age: 25,
    city: "New York",
    isStudent: true
};
```

You can access object properties using **dot notation** or **bracket notation**:

```js
let person = {
    name: "John",
    age: 25
};

console.log(person.name);      // "John" (dot notation)
console.log(person["age"]);    // 25 (bracket notation)

person.city = "New York";      // add a new property
console.log(person);           // {name: "John", age: 25, city: "New York"}
```

## 📝 Instructions:

1. Create an object called `user` with at least 3 properties (e.g., name, age, email).
2. Access and print each property using dot notation.
3. Add a new property to the object.
4. Print the complete object.

## Example:

```js
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car.brand);   // "Toyota"
console.log(car.model);   // "Camry"
console.log(car.year);    // 2020

car.color = "blue";
console.log(car);         // {brand: "Toyota", model: "Camry", year: 2020, color: "blue"}
```

## 💡 Hint:

+ Objects help organize related data together.
+ Properties are separated by commas.
+ You can add new properties at any time!


---
tutorial: "https://www.youtube.com/watch?v=prIqHDmw5r0"
---

# `22` Métodos de Arrays

Los arrays tienen muchos métodos incorporados que nos permiten manipularlos. Los más comunes son:

- **`push()`**: Añade uno o más elementos al final del array
- **`pop()`**: Elimina el último elemento del array
- **`shift()`**: Elimina el primer elemento del array
- **`unshift()`**: Añade uno o más elementos al principio del array
- **`length`**: Propiedad que devuelve el número de elementos en un array

```js
let fruits = ["manzana", "plátano"];
fruits.push("naranja");          // fruits es ahora ["manzana", "plátano", "naranja"]
console.log(fruits.length);      // 3

let lastFruit = fruits.pop();    // elimina "naranja", lastFruit = "naranja"
console.log(fruits);             // ["manzana", "plátano"]

fruits.unshift("uva");           // fruits es ahora ["uva", "manzana", "plátano"]
let firstFruit = fruits.shift(); // elimina "uva", firstFruit = "uva"
```

## 📝 Instrucciones:

1. Crea un array llamado `students` con 3 nombres de estudiantes.
2. Añade un nuevo nombre de estudiante al final usando `push()`.
3. Elimina el primer estudiante usando `shift()`.
4. Imprime la longitud del array.
5. Imprime el array final.

## Ejemplo:

```js
let team = ["Alice", "Bob"];
team.push("Charlie");  // ["Alice", "Bob", "Charlie"]
team.shift();          // ["Bob", "Charlie"]
console.log(team.length);  // 2
console.log(team);     // ["Bob", "Charlie"]
```

## 💡 Pista:

+ Los métodos son funciones que pertenecen a objetos. ¡Los arrays también son objetos!
+ `push()` y `unshift()` añaden elementos, mientras que `pop()` y `shift()` los eliminan.


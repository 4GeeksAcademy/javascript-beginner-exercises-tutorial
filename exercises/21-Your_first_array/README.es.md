---
tutorial: "https://www.youtube.com/watch?v=prIqHDmw5r0"
---

# `21` Tu Primer Array

Un array es una lista de valores. Los arrays son una de las estructuras de datos más importantes en programación porque nos permiten almacenar múltiples valores en una sola variable.

Los arrays se declaran con corchetes `[]` y pueden contener cualquier tipo de dato:

```js
let fruits = ["manzana", "plátano", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "hola", true, 3.14];
```

Puedes acceder a cada elemento en un array usando su **índice** (posición). Recuerda que los índices comienzan en `0`:

```js
let fruits = ["manzana", "plátano", "naranja"];
console.log(fruits[0]); // "manzana"
console.log(fruits[1]); // "plátano"
console.log(fruits[2]); // "naranja"
```

## 📝 Instrucciones:

1. Crea un array llamado `colors` con al menos 3 nombres de colores como strings.
2. Usa `console.log()` para imprimir cada color accediendo por su posición de índice.
3. Imprime el array completo en la consola.

## Ejemplo:

```js
let animals = ["perro", "gato", "pájaro"];
console.log(animals[0]); // "perro"
console.log(animals[1]); // "gato"
console.log(animals[2]); // "pájaro"
console.log(animals);    // ["perro", "gato", "pájaro"]
```

## 💡 Pista:

+ Recuerda: los índices de arrays comienzan en 0, ¡no en 1!
+ Puedes almacenar cualquier tipo de dato dentro de un array.


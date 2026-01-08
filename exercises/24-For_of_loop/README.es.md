---
tutorial: "https://www.youtube.com/watch?v=Y0LSuCI3Xv8"
---

# `24` Bucle For...of

El bucle `for...of` es una forma más limpia de iterar a través de los elementos de un array. A diferencia del bucle `for` tradicional que usa un índice, `for...of` te da acceso directo a cada elemento.

```js
let fruits = ["manzana", "plátano", "naranja"];

// Bucle for tradicional
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Bucle for...of (¡más fácil!)
for (let fruit of fruits) {
    console.log(fruit);
}
```

Ambos producen el mismo resultado, pero `for...of` es más legible y simple cuando no necesitas el índice.

Puedes usar `for...of` con:
- Arrays
- Strings (itera a través de cada carácter)
- Cualquier objeto iterable

```js
let word = "Hola";
for (let letter of word) {
    console.log(letter);  // H, o, l, a
}
```

## 📝 Instrucciones:

1. Crea un array llamado `numbers` con al menos 5 números.
2. Usa un bucle `for...of` para iterar a través del array.
3. Dentro del bucle, imprime cada número multiplicado por 2.
4. También crea un string e usa `for...of` para imprimir cada carácter.

## Ejemplo:

```js
let animals = ["gato", "perro", "pájaro"];
for (let animal of animals) {
    console.log(animal.toUpperCase());
}

let name = "Carlos";
for (let char of name) {
    console.log(char);
}
```

## 💡 Pista:

+ `for...of` es perfecto cuando necesitas acceder a los valores, no al índice.
+ `for...of` funciona con cualquier iterable (arrays, strings, etc.).


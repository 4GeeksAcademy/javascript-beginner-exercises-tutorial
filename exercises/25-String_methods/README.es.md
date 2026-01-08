---
tutorial: "https://www.youtube.com/watch?v=rRQnB3AYiF8"
---

# `25` Métodos de Strings

Los strings tienen muchos métodos incorporados que nos permiten manipular y trabajar con texto. Aquí están los más comunes:

- **`length`**: Devuelve el número de caracteres en un string
- **`toUpperCase()`**: Convierte el string a mayúsculas
- **`toLowerCase()`**: Convierte el string a minúsculas
- **`indexOf()`**: Devuelve la posición de la primera ocurrencia de un substring
- **`slice()`**: Extrae una parte de un string
- **`includes()`**: Comprueba si un string contiene un substring
- **`replace()`**: Reemplaza texto en un string
- **`trim()`**: Elimina espacios en blanco de ambos extremos

```js
let message = "Hola Mundo";

console.log(message.length);                 // 10
console.log(message.toUpperCase());          // "HOLA MUNDO"
console.log(message.toLowerCase());          // "hola mundo"
console.log(message.indexOf("Mundo"));       // 5
console.log(message.slice(0, 4));            // "Hola"
console.log(message.includes("Mundo"));      // true
console.log(message.replace("Mundo", "JS")); // "Hola JS"
console.log("  espacios  ".trim());          // "espacios"
```

## 📝 Instrucciones:

1. Crea una variable de string con una oración.
2. Imprime la longitud del string.
3. Imprime el string en mayúsculas y minúsculas.
4. Usa `indexOf()` para encontrar la posición de una palabra.
5. Usa `slice()` para extraer parte del string.
6. Usa `includes()` para comprobar si una palabra existe en el string.
7. Usa `replace()` para reemplazar una palabra por otra.

## Ejemplo:

```js
let text = "JavaScript es increíble";

console.log(text.length);                    // 23
console.log(text.toUpperCase());             // "JAVASCRIPT ES INCREÍBLE"
console.log(text.indexOf("increíble"));      // 14
console.log(text.slice(0, 10));              // "JavaScript"
console.log(text.includes("increíble"));     // true
console.log(text.replace("increíble", "genial")); // "JavaScript es genial"
```

## 💡 Pista:

+ Los strings son inmutables - los métodos devuelven nuevos strings, no modifican el original.
+ `indexOf()` devuelve -1 si el substring no se encuentra.
+ ¡Muchos métodos de string son sensibles a mayúsculas y minúsculas!


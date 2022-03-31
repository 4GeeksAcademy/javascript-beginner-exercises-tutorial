# `10` Creating a New Function

Como ya sabes, las funciones son un bloque útil de código que puedes reutilizar las veces que desees. En el último ejercicio, tuviste una función que recibía dos argumentos (dos entradas o inputs) y devolvía la suma de ellas. 

De esta forma:

```js
function addNumbers(a, b){
  return a + b;
}
```

Pero Javascript viene con un montón de funciones "pre-definidas" que puedes utilizar. Por ejemplo:

```js
Math.random();
```

Puedes utilizar la función `Math.random()` para obtener un número decimal (en inglés llamado **floating-point**, **float** o **double**) aleatorio.  Este decimal será entre el 0 y un número `n` (incluyendo el 0 pero no el número n). Cada vez que llames a `Math.random()`, devolverá otro número decimal aleatorio.

## 📝  Instrucciones:

1. Por favor crea una función llamada `generateRandom()`, que genere un número aleatorio entre 0 y 9 cada vez que la llames.

## 💡 Pista:

+ Una posible solución podría ser utilizar dos funciones predefinidas: las funciones `Math.random()` y `Math.floor()`. 

+ Puedes aprender más sobre estas funciones [aquí](https://www.w3schools.com/jsref/jsref_random.asp)
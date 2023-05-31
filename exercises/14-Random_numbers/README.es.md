# `14` Random Numbers

JavaScript viene con un montón de funciones "pre-definidas" muy útiles que puedes utilizar. Una de ellas es:

```js
Math.random();
```

Puedes utilizar la función `Math.random()` para obtener un número decimal (en inglés llamado **floating-point**, **float** o **double**) aleatorio. Este decimal será entre el 0 y un número `n` (incluyendo el 0 pero no el número n).

La función `Math.random()` devolverá un número decimal aleatorio entre el 0 y 1, compila el ejercicio tal como está varias veces para probarlo.

## 📝 Instrucciones:

1. Actualiza el código de la función para hacer que devuelva un número entero (no decimales) entre 1 y 10.

## 💡 Pistas:

+ `Math.random()` solo devuelve números decimales del 0 al 1, y nosotros necesitamos números enteros del 1 al 10. 

+ Multiplica la función `Math.random()` por 10 para mover el decimal un espacio a la derecha.

+ Usa la función `Math.floor()` para eliminar el resto de los decimales y tener solo los enteros.

+ Puedes leer mas sobre como usar estas dos funciones [aquí](https://www.w3schools.com/jsref/jsref_random.asp).

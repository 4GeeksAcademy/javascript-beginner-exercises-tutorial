# `17` Tu Primer Bucle (Loop)

Los bucles e iteraciones te permiten repetir un proceso rápida y eficientemente. 

Las dos formas más utilizadas son los blucles `for`y `while`.

1.  Un bucle `for`se ve así:

```js
for (expresionInicial; condicional; expresionIncremental) {
    ...declaraciones;
}
```
Aquí hay un ejemplo de la declaración `for`:

```js
// Un bucle "for"
for (var i = 0; i < 10; i++) {
    console.log("Hello!")
}
```


2. Los bucles `while` tienen una naturaleza similar. Se ven así: 

```js
expresionInicial;
while (condicional) {
    ...declaraciones;
    expresionIncremental;
}
```
Y aquí hay un ejemplo:

```js
// un bucle "while" 
var i = 0;
while (i < 10) {
    console.log("Goodbye!");
    i++;
}
```
Mientras el *condicional* sea true, el bucle continuará repitiéndose. Si el *condicional* es false, el bucle terminará. Fíjate que ambos bucles usan los mismos componentes organizados de manera diferente.

Puedes usar `>` (mayor que), `<` (menor que), `>=` (mayor que o igual a), `<=` (menor que o igual a), `===` (igual a), `!==` (distinto) en tus condicionales.


## :pencil: Instrucciones:

Si compilas este código verás un conteo del `0` al `99` (Caracteres blancos) en la consola.  

1. Arregla el código para que cuente hasta el `100`. Luego lo verás seguido por el `101` en verde en la consola.

### :mag_right_: Importante:

*Hay una serie de ejercicios dedicados a Arrays (arreglos). Te recomendamos hacer esos [ejercicios](https://gitpod.io/#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) antes de continuar con este este primer ejercicio de Array. Luego, regresa aquí para continuar con éstos.*



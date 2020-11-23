# `17` Tu Primer Bucle (Loop)

Los bucles e iteraciones te permiten repetir un proceso rápida y eficientemente. Las dos formas más utilizadas son los blucles `for`y los bucles `while`.

Un bucle `for`se ve así:

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


Los bucles `while` tienen una naturaleza similar. Se ven así: 

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

Si corres este código verás un conteo del `0` al `99` (Caracteres blancos).  

Arregla el código para que cuente hasta el `100`. Luego lo verás seguido por el 101 en verde en la consola.

### :exclamation: IMPORTANTE: 
*Hay una serie de ejercicios dedicados a Arrays (arreglos),te invitamos a ir y terminar esos ejercicios luego de que finalices este primer ejercicio de Array. (Y luego, regresas aqui para continuar).*



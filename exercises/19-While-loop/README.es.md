# `19` El Loop WHILE

Como hemos mencionado en un ejercicio anterior, los bucles `while`son similares a los bucles `for`, solo que están estructurados de manera diferente.

Aquí está nuevamente:

```js
expresionInicial;
while (condicional) {
    ...declaraciones;
    expresionIncremental;
}
```
Digamos que tenemos el siguiente bucle `while`:

```js
// un bucle "while" 
var i = 0;
while (i < 10) {
    console.log("Goodbye!");
}
```
Puede que ya hayas experimentado esto ¿Te das cuenta de que falta algo? No hay un expresión de incremento en nuestro bucle. Esto es un problema porque queremos incrementar la variable `i` hasta alcanzar el valor deseado para salirnos del bucle. Si no incrementamos `i`, queda permanentemente en `0`, lo que generará un bucle infinito. 

## :pencil: Instrucciones:

* Arregla el bucle `while` para que funcione y no genere un bucle infinito.

* Imprime del 100 - 0. 

* Regresa el `counter` a 0.

### :exclamation: IMPORTANTE: 
*Hay ejercicios dedicados a Arrays (arreglos), te incetivamos a ir y finalizar esos ejercicios después de que termines tu primer ejercicio de Array. (Y luego, regresa).*


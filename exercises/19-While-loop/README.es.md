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
Puede que ya hayas experimentado con este bucle (loop) 

¿Notas que falta algo? 

No hay un *expresión de incremento* en nuestro bucle. Esto es un problema porque queremos incrementar la variable `i` hasta alcanzar el valor deseado para salirnos del bucle. Si no incrementamos `i`, queda permanentemente en `0`, lo que generará un bucle infinito. 

## :pencil: Instrucciones:

1. Arregla el bucle `while` para que funcione y no genere un bucle infinito.

2. Imprime del 100 - 0. 

3. Regresa el `counter` a 0.

### :mag_right: Importante: 

Hay ejercicios dedicados a Arrays, te recomendamos  realizar esos [ejercicios](https://gitpod.io/#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) después de que termines este ejercicio. 

*Cuando te sientas cómodo con este contenido, regresa y continua con estos ejercicio.*


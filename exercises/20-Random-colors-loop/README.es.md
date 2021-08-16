# `20` Loop de Colores Aleatorios

Hasta ahora, hemos aprendido sobre condicionales, números aleatorios, funciones y bucles. 

¡Ahora vamos a unirlos todos en un programa! En vez de devolver simplemente números aleatorios, podemos devolver una selección alearoeia de lo que queramos ¡Cuántas veces queramos!

## :pencil: Instrucciones:

Hemos creado una función que regresa un color basado en un número entero entre `1` y `4`(incluido). Cualquier número diferente, regresará el color `black`(negro).

Escenario: Digamos que eres profesor en un aula de 10 estudiantes y quieres asignar de forma aleatoria **UN** color (`red`, `yellow` , `blue` o `black`), a **CADA** estudiante. 

(sólo UN color POR estudiante)

1. Cambia la función `getAllStudentColors()` para que imprima 10 colores aleatorios, un color por cada estudiante.

### :bulb: Pista: 

- Tienes 10 estudiantes, necesitas hacer un bucle 10 veces.

- Cada vez que hagas un loop, genera un número aleatorio entre 1-4 usando la función `Math.random()` y `Math.random` que vimos en los últimos ejercicios.

- Dentro del bucle, llama a la función `getColor()` en para pasarle los números generados aleatoriamente(como arrgunemnto) para obtener y devolver un color.

- Imprime el color en la consola.

### :mag_right: Importante:

Si sientes que no estás entendiendo los bucles y estás atascado, haz primero estos [ejercicios](https://gitpod.io/#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial).
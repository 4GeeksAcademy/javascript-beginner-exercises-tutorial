<!-- hide -->
<div align="center">

# Tutorial para Principiantes de Javascript (Interactivo)

[![Tutorial certificado por 4Geeks Academy](https://img.shields.io/badge/4Geeks_Academy-Tutorial_certificado-2563eb?style=for-the-badge)](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)
[![25 ejercicios autocorregidos con LearnPack](https://img.shields.io/badge/LearnPack-25_ejercicios_autocorregidos-2563eb?style=for-the-badge)](https://github.com/learnpack/learnpack)
[![Abrir en Codespaces](https://img.shields.io/badge/Abrir_en-Codespaces-fb5a1f?style=for-the-badge&logo=github)](https://codespaces.new/?repo=4GeeksAcademy/javascript-beginner-exercises-tutorial)

![Portada del tutorial: el texto Learn Javascript Beginner interactive en tipografía negra y naranja, junto al logo hexagonal amarillo de JS](https://raw.githubusercontent.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/HEAD/preview.png)

</div>
<!-- endhide -->

Este tutorial reúne **25 ejercicios de JavaScript con corrección automática** que se completan en unas **8 horas**, desde tu primer `console.log()` hasta los métodos de arrays y strings. Cada ejercicio trae un `app.js` que editas, un fichero de tests con Jest que lo corrige al instante y una solución oculta. 15 incluyen vídeo explicativo y los 25 están escritos en español y en inglés. No hace falta saber programar.

<!-- hide -->
## 📋 Ficha del tutorial

- **Dificultad**: fácil (nivel principiante, sin conocimientos previos)
- **Duración estimada**: 8 horas
- **Ejercicios**: 25 ejercicios corregidos + 1 paso de bienvenida
- **Tecnologías**: JavaScript (ES6), Node.js 22, Jest 29.7.0, LearnPack 5.0.348
- **Corrección**: automática y `isolated` — cada ejercicio se evalúa por separado
- **Vídeos de solución**: 15 ejercicios enlazan un vídeo explicativo
- **Idiomas**: [English](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

Los 25 ejercicios recorren el núcleo del lenguaje, una idea cada vez:

- **Imprimir y declarar variables**: `console.log()`, declarar una variable y sacar su valor por consola.
- **Aritmética**: el operador `*` y cómo guardar el resultado en una variable.
- **Entrada del usuario**: `prompt()` aparece en 4 ejercicios, junto con la conversión de tipos que obliga a hacer.
- **Constantes**: `const`, por qué es de solo lectura y qué error exacto salta al reasignarla.
- **Strings**: concatenación, montar un documento HTML completo a partir de 8 constantes y 8 métodos de texto (`length`, `toUpperCase()`, `toLowerCase()`, `indexOf()`, `slice()`, `includes()`, `replace()`, `trim()`).
- **Funciones**: llamar a una que ya existe, escribir tú el cuerpo, devolver valores y pasar 3 argumentos.
- **Condicionales**: `if...else` de tres ramas, un problema de precios con 4 tramos y un `switch` con 3 casos más su `default`.
- **Azar**: `Math.random()` y `Math.floor()` para obtener enteros dentro de un rango.
- **Bucles**: `for`, `while` (incluido cómo frenar uno infinito), `for...of` y el FizzBuzz del 1 al 100.
- **Arrays y objetos**: acceso por índice, `push()`, `pop()`, `shift()`, `unshift()`, `length`, pares clave-valor y notación de punto frente a corchetes.

## 👀 ¿Qué vas a construir?

Cada carpeta numerada dentro de `exercises/` es un programa pequeño e independiente que completas y ejecutas:

1. **Hello World** — imprimir `Hello World` con `console.log()`.
2. **Imprimir variables en la consola** — declarar `color = "red"` y mostrarlo.
3. **Multiplicar dos valores** — guardar `2345 * 7323` en `variablesAreCool`.
4. **Variables introducidas por el usuario** — sumar 10 años a una `age` capturada con `prompt()`.
5. **Constantes** — arreglar el error que revienta el programa y conseguir que imprima `0.9`.
6. **Concatenación de strings** — ajustar dos variables para que la salida diga `Hello World`.
7. **Crear un HTML básico** — unir 8 constantes hasta formar `<html><head><title></title></head><body></body></html>`.
8. **Llamar a tu primera función** — invocar `isOdd()` pasándole el número 45345.
9. **Crear tu primera función** — escribir el cuerpo para que el programa imprima `7`.
10. **Crear una función nueva** — construir `shortIntroduction(name, profession, age)`.
11. **Tu primer `if`** — tres respuestas distintas según los kilómetros que queden.
12. **Cuánto cuesta la boda** — una función `getPrice()` que devuelve 4000, 10000, 15000 o 20000.
13. **Tu primer `switch`** — colores de zapato `red`, `green` y `blue`, devolviendo `true` o `false`.
14. **Números aleatorios** — convertir `Math.random()` en un entero del 1 al 10.
15. **Aleatorios del uno al seis** — la misma idea, ahora como un dado.
16. **Tu primer bucle** — imprimir los enteros del 0 al 100.
17. **Crear un bucle `for`** — un `standardsMaker()` que escribe una frase 300 veces.
18. **Bucle `while`** — reparar un bucle infinito y contar hacia atrás del 100 al 0.
19. **Bucle de colores aleatorios** — repartir uno de 4 colores a cada uno de 10 alumnos.
20. **FizzBuzz con bucles** — el clásico de las entrevistas técnicas, del 1 al 100.
21. **Tu primer array** — un array `colors` impreso por índice.
22. **Métodos de array** — `push()`, `shift()` y `length` sobre una lista de estudiantes.
23. **Tu primer objeto** — un objeto `user` leído con notación de punto.
24. **Bucle `for...of`** — recorrer 5 números e imprimir cada uno multiplicado por 2.
25. **Métodos de string** — longitud, mayúsculas, `indexOf()`, `slice()`, `includes()` y `replace()` sobre una frase.

Antes del ejercicio 1 hay además un paso `00-Welcome` con vídeo de introducción, así que el tutorial suma 26 pasos en total.

![Banner amarillo de polígonos con el mensaje "i love JS" y el corazón dibujado en rojo, la imagen de apertura del tutorial](https://raw.githubusercontent.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/HEAD/.learn/assets/i-love-javascript.jpeg)

## 🎓 ¿Qué necesitas antes de empezar?

- **Ninguna experiencia programando.** La dificultad declarada en `learn.json` es `easy` y el primer ejercicio es un único `console.log()`.
- **Una cuenta de GitHub** si eliges la vía rápida: Codespaces abre el entorno completo en el navegador sin instalar nada en tu ordenador.
- **Node.js** solo si prefieres trabajar en local. El contenedor de desarrollo incluido parte de la imagen oficial de Node.js 22.
- **Español o inglés.** Los 26 pasos traen su `README.md` y su `README.es.md`.
- **Costumbre de buscar.** Varias pistas te mandan a Google a propósito: el ejercicio 5, por ejemplo, te pide buscar `TypeError assignment to constant variable` en vez de darte la solución.

## ✅ ¿Cómo funciona la corrección automática?

- 25 de las 26 carpetas contienen un fichero de tests (24 se llaman `tests.js` y uno `test.js`) que ejecuta **Jest 29.7.0**.
- En `learn.json` la corrección es `"grading": "isolated"`, así que cada ejercicio se compila y se evalúa por su cuenta: si el 12 está roto, el 13 sigue funcionando.
- Los tests miran comportamiento real, no texto. El ejercicio 12 carga tu `app.js` con `rewire`, extrae `getPrice` y lo llama con 50, 51, 100, 101, 200 y 201 para comprobar todos los límites de la tabla de precios.
- Algunos tests además cuentan llamadas: el ejercicio 1 exige que `console.log` se haya llamado con `Hello World` **y** que se haya llamado una sola vez.
- Cada ejercicio incluye un `solution.hide.js` que puedes destapar después de intentarlo.

> 💡 Los autores avisan de que el corrector es muy rígido y estricto. Toma un test en rojo como una sugerencia, no como una sentencia sobre tu código.

## 💡 ¿Qué errores conviene evitar?

- **Tratar lo que devuelve `prompt()` como un número.** Siempre devuelve texto, así que con la entrada `25` la operación `age + 10` da `2510` y no `35`. Hay que convertirlo antes (ejercicio 4).
- **Reasignar una `const`.** JavaScript lanza `TypeError: Assignment to constant variable`, que es justo el fallo que el ejercicio 5 te pide arreglar.
- **Ordenar mal las ramas del `if...else` del ejercicio 12.** Los umbrales son exactos: 50 invitados todavía cuestan 4000, pero 51 ya cuestan 10000, y 200 cuestan 15000 mientras que 201 cuestan 20000.
- **Olvidar normalizar la entrada en el `switch`.** `Red` no coincide con `case 'red'`; la pista del ejercicio 13 te lleva a `toLowerCase()`.
- **Esperar que `Math.random()` devuelva enteros.** Devuelve un decimal entre 0 y 1, sin incluir el 1. Primero se multiplica y luego se aplica `Math.floor()` (ejercicios 14, 15 y 19).
- **Escribir un `while` sin salida.** El ejercicio 18 te entrega un bucle que tumba el programa hasta que corrijas la condición o el incremento.
- **Dar por hecho que los strings se modifican.** Son inmutables: `replace()` devuelve un string nuevo e `indexOf()` devuelve `-1` cuando no encuentra el texto (ejercicio 25).
- **Dejar `console.log()` de depuración.** Varios tests cuentan cuántas veces se llamó a la consola, así que un print olvidado pone en rojo una respuesta correcta.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en completar este tutorial de JavaScript?

La duración declarada es de **8 horas**, algo menos de 20 minutos de media por ejercicio. Es una estimación aproximada: los diez primeros suelen salir en pocos minutos, mientras que el FizzBuzz (20) y el bucle de colores aleatorios (19) le llevan bastante más tiempo a casi todo el mundo.

### ¿Necesito saber programar antes de empezar?

No. La dificultad está marcada como `easy` y el primer ejercicio es una línea de `console.log()`. Cada concepto —variables, funciones, condicionales, bucles, arrays y objetos— se explica en su propio README antes de pedirte que lo uses.

### ¿Tengo que instalar algo en mi ordenador?

No, si usas el botón de Codespaces: el entorno se abre en el navegador y arranca los ejercicios solo. Si prefieres trabajar en local necesitas Node.js y una instalación global, `npm i @learnpack/learnpack -g`. El contenedor de desarrollo fija las versiones que utiliza: LearnPack 5.0.348, el plugin `@learnpack/node` 1.1.15 y Jest 29.7.0.

### ¿Son gratis estos ejercicios? ¿Puedo republicarlos?

Abrirlos, ejecutarlos y completarlos no cuesta nada, y el código que escribas en `app.js` es tuyo. El repositorio en sí **no es open source**: el fichero [LICENSE.md](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/LICENSE.md) se reserva todos los derechos de propiedad intelectual y prohíbe expresamente republicar, vender, sublicenciar, reproducir o redistribuir el material. Léelo antes de reutilizar nada.

### ¿Se ve el DOM, React o las APIs del navegador?

No. Ningún ejercicio toca `document`, `querySelector` ni `addEventListener`: todo sucede en la consola y la única función del navegador que se usa es `prompt()`, en 4 ejercicios. El ejercicio 7 sí genera HTML, pero como string concatenado, nunca como elementos pintados en una página.

### ¿Sigue mereciendo la pena aprender JavaScript "a pelo"?

El navegador ejecuta JavaScript de forma nativa, y React, Vue, Angular y Node.js están escritos en él, así que los bucles, los condicionales, los arrays y los objetos son idénticos en todos. Aprenderlos sin un framework por medio es la razón de que este paquete sean 25 programas de consola y cero herramientas de build.

### ¿Qué hago después de terminar los 25 ejercicios?

Continuar con los siguientes paquetes de la serie: [Looping con JavaScript](https://4geeks.com/es/interactive-exercise/javascript-array-loops-exercises-es), después [Funciones de JavaScript](https://4geeks.com/es/interactive-exercise/javascript-functions-exercises-tutorial-es) y por último [Master JavaScript](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es).

<!-- hide -->
## 📚 Antes de empezar, algunos tutoriales relacionados

1. [JavaScript para Principiantes](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial) ← 🔥 Estás aquí
2. [Looping con JavaScript](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial)
3. [Funciones de JavaScript](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial)
4. [Master JavaScript](https://github.com/4GeeksAcademy/master-javascript-programming-exercises)

## 🚀 Cómo empezar

Lo más rápido es un clic: [Abrir en Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-beginner-exercises-tutorial) (recomendado) o [Abrir en Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial.git).

Cuando VSCode se abra, los ejercicios de LearnPack deberían arrancar automáticamente. Si no lo hacen, escribe esto en la terminal:

```bash
$ learnpack start
```

## 💻 Instalación local

[Clona el repositorio](https://4geeks.com/how-to/github-clone-repository) en tu entorno local y después:

1. Instala [LearnPack](https://github.com/learnpack/learnpack), el gestor de paquetes de los tutoriales interactivos, junto con el plugin compilador de node. Necesitas [Node.js](https://nodejs.org/) 16 o superior:

```bash
$ npm i @learnpack/learnpack -g
$ learnpack plugins:install @learnpack/node
```

2. Arranca los ejercicios ejecutando este comando al mismo nivel que tu fichero `learn.json`:

```bash
$ learnpack start
```

## 📝 Cómo están organizados los ejercicios

Cada ejercicio es un programa de JavaScript pequeño e independiente formado por estos ficheros:

- **`app.js`**: el fichero de entrada que editas y que ejecuta el ordenador.
- **`README.md`** y **`README.es.md`**: las instrucciones, en inglés y en español.
- **`tests.js`**: el script de [Jest](https://jestjs.io/) que corrige tu respuesta. No necesitas abrirlo.
- **`solution.hide.js`**: una solución posible, oculta hasta que la pidas.

¿Has encontrado un bug o una errata? [Abre un issue](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/issues) — estos ejercicios se mantienen con la ayuda de colaboradores como tú.

## 🤝 Colaboradores

Gracias a estas personas:

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — programador 💻, idea 🤔, build-tests ⚠️, revisión de pull requests 👀, build-tutorial ✅, documentación 📖
2. [Paolo (plucodev)](https://github.com/plucodev) — reporte de bugs 🐛, programador 💻, traducción 🌎
3. Ricardo Rodriguez (RickRodriguez8080) — build-tutorial ✅, documentación 📖

Puedes ver la lista completa en el [gráfico de colaboradores](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/graphs/contributors). Este proyecto sigue la especificación all-contributors y todas las contribuciones son bienvenidas.

Este y otros muchos ejercicios los construyen estudiantes e instructores de [4Geeks Academy](https://4geeks.com) dentro de su bootcamp de programación.
<!-- endhide -->

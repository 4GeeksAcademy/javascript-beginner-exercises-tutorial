# `24` JavaScript Objects

A menudo te encontrarás queriendo guardar más información en menos espacio, especialmente si está toda relacionada. 

Por ejemplo, digamos que queremos representar autos dentro de variables:

```js
let car1Model = "Corolla";
let car1Make = "Toyota";
let car1Color = "green";
let car1Year = 2015;

let car2Model = "Santa Fe";
let car2Make = "Hyundai";
let car2Color = "purple";
let car2Year = 2013;

//... (¿entiendes la idea?)
```


Hay un enfoque óptimo para esto, son los **objetos**. Los **objetos (objects)** son un tipo de variable que contienen información (otras variables) en forma de `key:value`.

Entonces, si queremos traducir (y optimizar) las variables desde car (auto) a un Object, hacemos:

```js
const car1 = {model: "Corolla", make: "Toyota", color: "green", year: 2015};
```

Puedes ver el `key:value` separado por una coma. 

Y para que nosotros (los desarrolladores) podamos leerlas más fácilmente las escribimos así:

```js
const car1 = {
    model: "Corolla", 
    make: "Toyota", 
    color: "green",  
    year: 2015
};
```

Parece una función, ¿verdad? Pero no lo es.

Ahora estamos guardando información de una forma más organizada, y si queremos obtener esa información podemos hacer:

```js
console.log(car1.model); //imprime el modelo de car1 en la consola
```

Podemos tener todos los tipos de variables conocidas en JavaScript como valor(`value`) de cualquier `key` (¡incluyendo objetos!). Ahora imagina las posibilidades...

```js
var person = {
    name: "John",                   //String
    lastName: "Doe",
    age: 35,                        //Número
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],  //Array
    significantOther: person2       //Objeto, sí, la misma variable/objeto definida después
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]       //Array de objetos
};
```

Entonces, si en este escenario queremos saber el nombre del primer miembro de la familia Doe, decimos:

```js
console.log(family.members[0].name);
```

O el 3er número de la suerte del `significantOther` del segundo miembro de la familia Doe:

```js
console.log(family.members[1].significantOther.luckyNumbers[2]);
```

Cosas sencillas :)

## 📝 Instrucciones:

1. De forma automatizada, cambia el cuarto número de la suerte de John Doe (`luckyNumber`) a `33` (usa un comando, no cambies manualmente el código).

2. De forma automatizada, crea una nueva persona y añádela al objeto familia. `Jimmy Doe`, `13`, `male`(masculino), `luckyNumbers` (números de la suerte): `1`, `2`, `3`, `4`; `significantOther: null`.

3. Ahora por favor imprime (`console.log()`) la SUMA de todos los números de la suerte (`luckyNumbers`) de la familia Doe.

## 💡 Pistas:

+ Puedes obtener cada array de números de la suerte (`luckyNumbers`) desde el objeto de cada persona dentro del objeto familia.

+ Una vez obtengas cada array, solo has un loop sobre él sumando cada elemento (como hemos hecho hasta ahora). Luego obtén el total de la suma de los 3 miembros de la familia.

+ `null` también es un objeto.

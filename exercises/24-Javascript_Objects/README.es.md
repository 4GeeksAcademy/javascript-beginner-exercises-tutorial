# `24` JavaScript Objects

A menudo te encontrarás queriendo guardar más información en menos espacio, especialmente si está toda relacionada. 

Por ejemplo, digamos que queremos representar autos dentro de variables:

```js
let car1Model = "corolla";
let car1Make = "Toyota";
let car1Color = "green";
let car1Year = 2015;

let car2Model = "santa fe";
let car2Make = "Hyundai";
let car2Color = "purple";
let car2Year = 2013;

//... (¿entiendes la idea?)

```


Hay un enfoque óptimo para esto, son los **objetos**. Los **objetos (objects)** son un tipo de variable que contienen información (otras variables) en forma de `key:value`.

Entonces si queremos traducir (y optimizar) las variables desde car (auto) a un Object, hacemos:

```js
let car1 = { model: "corolla", make: "toyota", color: "green",  year: 2015};
```

Puedes ver el `key:value` separado por una coma. 

Y para nosotros (los desarrolladores) podamos leerlas más fácilmente las escribimos así:

```js
let car1 = {
    model: "corolla", 
    make: "toyota", 
    color: "green",  
    year: 2015
};
```

Parece una función, ¿verdad? Pero no lo es.

Ahora estamos guardando información de una forma más organizada, y si queremos obtener esa información podemos hacer:

```js
console.log(car1.model); //imprime el modelo del car1 en la consola
```

Podemos tener todos los tipos de variables definidas conocidas como valor(value) de cualquier `key` (¡incluyendo objetos!). Ahora imagina las posiblidades...

```js
let person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Numero
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Objeto, si la misma variable/objeto definida después
};

let person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

let family = {
    lastname: "Doe",
    members: [person, person2]       //Array de objetos
};
```

Entonces, si en este escenario queremos saber el nombre del primer miembro de la familia Doe, decimos:

```js
console.log(family.members[0].name);
```

O el 3er número de la suerte (3rd lucky number) del `significant other` del segundo miembro de la familia Doe:

```js
console.log( family.members[1].significant_other.lucky_numbers[2]);
```

Cosas sencillas :)

## 📝 Instrucciones:

1. De forma automatizada, cambia el cuarto número de la suerte de John Doe(`lucky number`) a `33` (usa un comando, no cambies manualmente el código).

2. De forma automatizada, crea una nueva persona y añádela al objeto familia. `Jimmy Doe`, `13`, `male`(masuclino), `lucky numbers` (números de la suerte): `1`, `2`, `3`, `4`; `significant other: null`. (usa un comando, no cambies manualmente el código).

3. Ahora por favor imprime (`console.log()`) la SUMA de todos los números de la suerte (`lucky numbers`) de la familia Doe.

## 💡 Pistas:

+ Puedes obtener cada array de números de la suerte (`lucky numbers`) desde el objeto de cada persona dentro del objeto familia.

+ Una vez obtengas cada array, solo has un loop sobre él añadiendo cada elemento (como hemos hecho hasta ahora). Y añade la suma de cada unos de los 3 miembros de la familia.

+ `Null` también es un objeto.
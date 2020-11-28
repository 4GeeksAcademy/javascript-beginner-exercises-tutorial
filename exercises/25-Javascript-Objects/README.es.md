# `25` Objetos de JavaScript 

Regularmente te encontrarás queriendo guardar más información en menos espacio, especialmente si está toda relacionada. 

Por ejemplo, digamos que queremos representar autos dentro de variables:

```js
var car1Model = "corolla";
var car1Make = "Toyota";
var car1Color = "green";
var car1Year = 2015;

var car2Model = "santa fe";
var car2Make = "Hyundai";
var car2Color = "purple";
var car2Year = 2013;
//... (ya te haces una idea)
```

Hay un acercamiento óptimo para esto, se llama **Objects**. Los objetos (objects) son un tipo de variable que contiene información (otras variables) en forma de **key:value**.

Entonces si queremos traducir (y optimizar) las variables desde car (auto) a un Object, hacemos:
```js
var car1 = { model: "corolla", make: "toyota", color: "green",  year: 2015};
```

Puedes ver el **key:value** separado por una coma. 

Y para nosotros (desarrolladores) leerlas más fácilmente las escribimos así:

```js
var car1 = {
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

Podemos tener todos los tipos de variables definidas conocidas como valor(value) de cualquier "key" (¡incluyendo objetos!). Ahora imagina las posiblidades...

```js
var person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Object, si la misma variable/object definida después
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]       //Array of objects
};
```

Entonces, si en este escenario queremos saber el nombre del primer miembro de la familia Doe, hacemos:

```js
console.log(family.members[0].name);
```

O el 3er número de la suerte (lucky number) del significant other del segundo miembro de la familia Doe:

```js
console.log( family.members[1].significant_other.lucky_numbers[2]);
```

Cosas sencillas :)

## :pencil: Instrucciones:

1. De forma automatizada, cambia el cuarto número de la suerte de John Doe a 33 (usa un comando, no cambies manualmente el código).

2. De forma automatizada, crea una nueva persona y añádela al objeto familia. Jimmy Doe, 13, masculino, lucky numbers (números de la suerte): 1, 2, 3, 4; significant other: null. (usa un comando, no cambies manualmente el código).

3. Ahora por favor imprime ( console.log() ) la SUMA de todos los números de la suerte (lucky numbers) de la familia Doe.

### :bulb: Pistas:

* Puedes obtener cada arreglo (array) de números de la suerte (lucky numbers) desde el objeto de cada persona dentro del objeto familia.

* Una vez obtengas cada arreglo solo has un loop sobre él añadiendo cada elemento (como hemos hecho hasta ahora). Y añade cada suma de los 3 miembros familiares.

* Null también es un objeto.
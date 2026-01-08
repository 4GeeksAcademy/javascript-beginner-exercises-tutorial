---
tutorial: "https://www.youtube.com/watch?v=X0ujO1vQ5RE"
---

# `23` Tu Primer Objeto

Un objeto es una forma de almacenar datos y funcionalidad relacionados juntos. Los objetos se crean usando llaves `{}` y contienen **pares clave-valor**.

```js
let person = {
    name: "Juan",
    age: 25,
    city: "Madrid",
    isStudent: true
};
```

Puedes acceder a las propiedades del objeto usando **notación de punto** o **notación de corchetes**:

```js
let person = {
    name: "Juan",
    age: 25
};

console.log(person.name);      // "Juan" (notación de punto)
console.log(person["age"]);    // 25 (notación de corchetes)

person.city = "Madrid";        // añadir una nueva propiedad
console.log(person);           // {name: "Juan", age: 25, city: "Madrid"}
```

## 📝 Instrucciones:

1. Crea un objeto llamado `user` con al menos 3 propiedades (p.ej., name, age, email).
2. Accede e imprime cada propiedad usando notación de punto.
3. Añade una nueva propiedad al objeto.
4. Imprime el objeto completo.

## Ejemplo:

```js
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car.brand);   // "Toyota"
console.log(car.model);   // "Camry"
console.log(car.year);    // 2020

car.color = "azul";
console.log(car);         // {brand: "Toyota", model: "Camry", year: 2020, color: "azul"}
```

## 💡 Pista:

+ Los objetos ayudan a organizar datos relacionados juntos.
+ Las propiedades se separan por comas.
+ ¡Puedes añadir nuevas propiedades en cualquier momento!


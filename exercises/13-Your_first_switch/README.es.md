# `13` Your First Switch Statement

Podemos usar otra forma de condicional llamada **switch**. Un switch evalúa una expresión y la iguala a la cláusula `case`, ejecutando las declaraciones que hay dentro de ella. Aquí hay un ejemplo básico:

```js
const expr = 'Uno';
switch (expr) {
    case 'Uno':
        console.log('1');
        break;
    case 'Cero':
        console.log('0');
        break;
    default:
        console.log(`No computa.`);    
}
```

Imagina que tu software está manejando el inventario de una tienda de zapatos. El cliente necesita saber qué colores tienes disponible en un modelo específico de zapatos.

## 📝 Instrucciones:

1. Completa este condicional `switch` con 3 casos para un zapato disponible en 3 colores: 'red', 'green' y 'blue'.

2. La función debe regresar `true` si el color solicitado es uno de los colores disponibles de arriba o `false` si el color no está disponible.

## 💡 Pista:

+ Es posible que debas llevar la entrada (input) del usuario a minúsculas o mayúsculas para evitar discrepancias. Haz clic en lo siguiente para que aprendas a hacerlo:

+ Para llevar todo a mayúsculas (uppercase): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

+ Para llevar todo a minúsculas (lowercase): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

+ Más sobre condicionales switch: http://www.w3schools.com/js/js_switch.asp

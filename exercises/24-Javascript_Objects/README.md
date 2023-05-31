# `24` JavaScript Objects 

Often you'll find yourself wanting to save more information in less space, especially if it's all related. 

For example, let's say that we want to represent cars into variables:

```js
let car1Model = "Corolla";
let car1Make = "Toyota";
let car1Color = "green";
let car1Year = 2015;

let car2Model = "Santa Fe";
let car2Make = "Hyundai";
let car2Color = "purple";
let car2Year = 2013;

//... (you get the idea)
```

There's an optimized approach to this, it is called **Objects**. **Objects** are a type of variable that contains information (other variables) in a **key:value** manner.

So if we want to translate (and optimize) the variables from the car into an Object, we do:

```js
const car1 = {model: "Corolla", make: "Toyota", color: "green", year: 2015};
```

You can see the `key:value` separated by a comma. And for us (developers) to read it easier we write it like this:

```js
const car1 = {
    model: "Corolla", 
    make: "Toyota", 
    color: "green",  
    year: 2015
};
```

Looks like a function, right? But it's not.

Now we are storing information in a more organized way, and if we want to get that information we can do:

```js
console.log(car1.model); //prints the model of car1 in the console
```

We can have all of the known types of variables defined as the value of any `key` (including objects!). Now imagine the possibilities...

```js
var person = {
    name: "John",                   //String
    lastName: "Doe",
    age: 35,                        //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],  //Array
    significantOther: person2       //Object, yes, the same variable/object defined after
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
    members: [person, person2]      //Array of objects
};
```

So, in this scenario if we want to know the name of the first member of the Doe family we do:

```js
console.log(family.members[0].name);
```

Or the 3rd lucky number of the `significantOther` of the second member of the Doe family:

```js
console.log(family.members[1].significantOther.luckyNumbers[2]);
```

Easy stuff :)

## 📝 Instructions:

1. Programmatically, change the fourth `luckyNumber` of John Doe to `33` (use a command, don't manually change the code).

2. Programmatically, create a new person and add it to the family object. `Jimmy Doe`, `13`, `male`, `luckyNumbers`: `1`, `2`, `3`, `4`; `significantOther: null`.

3. Now please print (`console.log()`) the SUM of all the `luckyNumbers` of the Doe family.

## 💡 Hint:

+ You can get each array of `luckyNumbers` from each person object inside the family object.

+ Once you get each array, just loop over it adding every element (like we've been doing so far). And then add each sum of the 3 family members.

+ `null` is also an object.

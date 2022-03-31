# `19` Random Colors Loop

So far, we have learned about conditionals, random numbers, functions, and looping. Now we are going to tie all of them into one program!  Instead of simply returning random numbers, we can return a random selection of whatever we desire.  As many times as we want!

A function called `getColor` has been written that returns a color based on an integer between `1` and `4`, inclusive. For any integer beyond this range, the color `black` will be returned.

Scenario: You are a teacher in a 10-student classroom. You want to randomly assign **ONE** color (`red`, `yellow`, `blue` or `green`), to **EACH** student. 

(just ONE color to EACH student)

## 📝 Instructions

1. Complete the function `getAllStudentColors()` so that it prints 10 randomly selected colors, one per student.

## 💡 Hints: 

+ You have 10 students, you need to loop 10 times.

+ Each time you loop, generate a random number between 1-4 using the `*Math.floor()` and `Math.random()` built-in functions which we learned about in previous exercises.

+ Within the loop, you must also call the `getColor()` function to pass the randomly generated number (as an argument) to obtain and return a color.

+ Print the color to the console.

## 🔎  Important:

+ If you feel stuck and you don't understand loops, go back to these [exercises](https://gitpod.io/#https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial) .





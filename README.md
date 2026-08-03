<!-- hide -->
<div align="center">

# Javascript Beginner Tutorial (interactive)

[![Certified tutorial by 4Geeks Academy](https://img.shields.io/badge/4Geeks_Academy-Certified_tutorial-2563eb?style=for-the-badge)](https://4geeks.com/interactive-exercise/javascript-beginner-exercises)
[![25 auto-graded exercises with LearnPack](https://img.shields.io/badge/LearnPack-25_auto--graded_exercises-2563eb?style=for-the-badge)](https://github.com/learnpack/learnpack)
[![Open in Codespaces](https://img.shields.io/badge/Open_in-Codespaces-fb5a1f?style=for-the-badge&logo=github)](https://codespaces.new/?repo=4GeeksAcademy/javascript-beginner-exercises-tutorial)

![Cover of the tutorial: the words Learn Javascript Beginner interactive in black and orange type, next to the yellow hexagonal JS logo](https://raw.githubusercontent.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/HEAD/preview.png)

</div>
<!-- endhide -->

This tutorial is a set of **25 auto-graded JavaScript exercises** that take roughly **8 hours** to finish, starting from your first `console.log()` and ending with array and string methods. Every exercise ships an `app.js` you edit, a Jest test file that grades it instantly, and a hidden solution. 15 of them include a video walkthrough, and all 25 are written in English and Spanish. No prior programming experience required.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: easy (beginner, no previous code required)
- **Estimated duration**: 8 hours
- **Exercises**: 25 graded exercises + 1 welcome step
- **Technologies**: JavaScript (ES6), Node.js 22, Jest 29.7.0, LearnPack 5.0.348
- **Grading**: automatic and `isolated` — each exercise is tested on its own
- **Video solutions**: 15 exercises include a linked video walkthrough
- **Languages**: [English](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 What will you learn?

The 25 exercises walk through the core of the language, one idea at a time:

- **Printing and variables**: `console.log()`, declaring variables, and printing their value.
- **Arithmetic**: the `*` operator and storing a result in a variable.
- **User input**: `prompt()` appears in 4 exercises, together with the type conversion it forces on you.
- **Constants**: `const`, why it is read-only, and the exact error you get when you reassign it.
- **Strings**: concatenation, assembling a full HTML document out of 8 constants, and 8 string methods (`length`, `toUpperCase()`, `toLowerCase()`, `indexOf()`, `slice()`, `includes()`, `replace()`, `trim()`).
- **Functions**: calling an existing one, writing your own body, returning values, and passing 3 arguments.
- **Conditionals**: `if...else` with three branches, a 4-tier pricing problem, and a `switch` with 3 cases plus a `default`.
- **Randomness**: `Math.random()` and `Math.floor()` to produce integers in a given range.
- **Loops**: `for`, `while` (including how to stop an infinite one), `for...of`, and FizzBuzz from 1 to 100.
- **Arrays and objects**: index access, `push()`, `pop()`, `shift()`, `unshift()`, `length`, key-value pairs, and dot vs. bracket notation.

## 👀 What will you build?

Every numbered folder inside `exercises/` is one small self-contained program you complete and run:

1. **Hello World** — print `Hello World` with `console.log()`.
2. **Print variables to the console** — declare `color = "red"` and print it.
3. **Multiply two values** — store `2345 * 7323` in `variablesAreCool`.
4. **User inputted variables** — add 10 years to an `age` captured with `prompt()`.
5. **Constants** — fix a crash and make the program output `0.9`.
6. **String concatenation** — set two variables so the output reads `Hello World`.
7. **Creating basic HTML code** — join 8 constants into `<html><head><title></title></head><body></body></html>`.
8. **Calling your first function** — call `isOdd()` with the number 45345.
9. **Creating your first function** — write the body so the program prints `7`.
10. **Creating a new function** — build `shortIntroduction(name, profession, age)`.
11. **Your first "if" statement** — three answers depending on the kilometres left.
12. **How much does the wedding cost?** — `getPrice()` returning 4000, 10000, 15000 or 20000.
13. **Your first switch statement** — shoe colours `red`, `green` and `blue`, returning `true` or `false`.
14. **Random numbers** — turn `Math.random()` into an integer between 1 and 10.
15. **Random numbers from one to six** — the same idea, this time a dice.
16. **Your first loop** — print the integers 0 to 100.
17. **Creating a `for` loop** — a `standardsMaker()` that writes one phrase 300 times.
18. **The "while" loop** — repair an infinite loop and count down from 100 to 0.
19. **Random colors loop** — hand one of 4 colours to each of 10 students.
20. **Looping with FizzBuzz** — the classic interview exercise, 1 to 100.
21. **Your first array** — a `colors` array printed by index.
22. **Array methods** — `push()`, `shift()` and `length` on a list of students.
23. **Your first object** — a `user` object read with dot notation.
24. **For...of loop** — iterate 5 numbers and print each one doubled.
25. **String methods** — length, case, `indexOf()`, `slice()`, `includes()` and `replace()` on one sentence.

There is also a `00-Welcome` step with an intro video before exercise 1, so the tutorial has 26 steps in total.

![Yellow low-poly banner with the message "i love JS", the heart drawn in red, used as the opening image of the tutorial](https://raw.githubusercontent.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/HEAD/.learn/assets/i-love-javascript.jpeg)

## 🎓 What do you need before starting?

- **No programming experience.** The difficulty declared in `learn.json` is `easy`, and exercise 1 is a single `console.log()`.
- **A GitHub account** if you take the one-click route: Codespaces opens the whole environment in the browser with nothing installed on your machine.
- **Node.js** only if you want to run it locally. The included dev container is built on the official Node.js 22 image.
- **English or Spanish.** All 26 steps ship a `README.md` and a `README.es.md`.
- **A habit of searching.** Several hints deliberately send you to Google — exercise 5, for instance, tells you to look up `TypeError assignment to constant variable` instead of handing you the fix.

## ✅ How does the automatic grading work?

- 25 of the 26 folders contain a test file (24 named `tests.js`, one named `test.js`) executed by **Jest 29.7.0**.
- `learn.json` sets `"grading": "isolated"`, so each exercise is compiled and tested on its own — a broken exercise 12 does not block exercise 13.
- The tests inspect real behaviour, not just text. Exercise 12 loads your `app.js` with `rewire`, extracts `getPrice` and calls it with 50, 51, 100, 101, 200 and 201 to check every boundary of the price table.
- Some tests also count calls. Exercise 1 asserts that `console.log` was called with `Hello World` **and** that it was called exactly once.
- Every exercise carries a `solution.hide.js` you can reveal after trying.

> 💡 The original authors warn that the grader is very rigid and strict. Read a red test as a suggestion, not as a verdict on your code.

## 💡 What mistakes should you avoid?

- **Treating `prompt()` output as a number.** It always returns a string, so `age + 10` on the input `25` gives `2510`, not `35`. Convert it first (exercise 4).
- **Reassigning a `const`.** JavaScript throws `TypeError: Assignment to constant variable` — that is the crash exercise 5 asks you to fix.
- **Ordering the `if...else` branches badly in exercise 12.** The thresholds are exact: 50 guests still cost 4000, but 51 already cost 10000, and 200 cost 15000 while 201 cost 20000.
- **Forgetting to normalise user input in the `switch`.** `Red` will not match `case 'red'`; the hint points you to `toLowerCase()` (exercise 13).
- **Expecting `Math.random()` to give you integers.** It returns a decimal between 0 and 1, 1 excluded. You multiply first and then apply `Math.floor()` (exercises 14, 15, 19).
- **Writing a `while` with no exit.** Exercise 18 hands you a loop that crashes the program until you fix the condition or the increment.
- **Assuming strings change in place.** They are immutable: `replace()` returns a new string, and `indexOf()` returns `-1` when the text is not found (exercise 25).
- **Adding extra `console.log()` lines to debug.** Several tests count how many times the console was called, so leftover prints turn a correct answer red.

## ❓ Frequently asked questions

### How long does it take to complete this JavaScript tutorial?

The declared duration is **8 hours**, which averages a little under 20 minutes per exercise. It is a rough estimate: the first ten exercises are usually a few minutes each, while FizzBuzz (20) and the random colours loop (19) take most people considerably longer.

### Do I need to know how to program before starting?

No. The difficulty is set to `easy` and the first exercise is one line of `console.log()`. Every concept — variables, functions, conditionals, loops, arrays, objects — is introduced in its own README before you are asked to use it.

### Do I have to install anything on my computer?

Not if you use the Codespaces button: the environment opens in the browser and starts the exercises for you. If you prefer to work locally you need Node.js and one global install, `npm i @learnpack/learnpack -g`. The dev container pins the versions it uses: LearnPack 5.0.348, the `@learnpack/node` plugin 1.1.15 and Jest 29.7.0.

### Are these exercises free, and can I republish them?

Opening, running and completing them costs nothing, and the code you write in `app.js` is yours. The repository itself is **not open source**: [LICENSE.md](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/blob/HEAD/LICENSE.md) reserves all intellectual property rights and explicitly forbids republishing, selling, sub-licensing, reproducing or redistributing the material. Read it before reusing anything.

### Does this tutorial cover the DOM, React or the browser APIs?

No. Not a single exercise touches `document`, `querySelector` or `addEventListener` — everything runs through the console, and the only browser function used is `prompt()`, in 4 exercises. Exercise 7 does produce HTML, but as a concatenated string, never as elements on a page.

### Is it still worth learning plain JavaScript first?

The browser runs JavaScript natively, and React, Vue, Angular and Node.js are all written in it, so loops, conditionals, arrays and objects are the same in every one of them. Learning them without a framework in the way is why this package is 25 console programs and zero build tooling.

### What should I do after finishing these 25 exercises?

Move on to the follow-up packages in the same series: [Looping with JavaScript](https://4geeks.com/interactive-exercise/javascript-array-loops-exercises), then [JavaScript Functions](https://4geeks.com/interactive-exercise/javascript-functions-exercises-tutorial), and finally [Master JavaScript](https://4geeks.com/interactive-exercise/master-javascript-exercises).

<!-- hide -->
## 📚 Before you start, some related tutorials

1. [JavaScript for Beginners](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial) ← 🔥 You are here
2. [Looping with JavaScript](https://github.com/4GeeksAcademy/javascript-arrays-exercises-tutorial)
3. [JavaScript Functions](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial)
4. [Master JavaScript](https://github.com/4GeeksAcademy/master-javascript-programming-exercises)

## 🚀 How to start

The fastest way is one click: [Open in Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-beginner-exercises-tutorial) (recommended) or [Open in Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial.git).

Once VSCode opens, the LearnPack exercises should start automatically. If they do not, run this in the terminal:

```bash
$ learnpack start
```

## 💻 Local installation

[Clone the repository](https://4geeks.com/how-to/github-clone-repository) into your local environment and then:

1. Install [LearnPack](https://github.com/learnpack/learnpack), the package manager for interactive tutorials, together with the node compiler plugin. You need [Node.js](https://nodejs.org/) 16 or newer:

```bash
$ npm i @learnpack/learnpack -g
$ learnpack plugins:install @learnpack/node
```

2. Start the exercises by running this command at the same level as your `learn.json` file:

```bash
$ learnpack start
```

## 📝 How the exercises are organized

Each exercise is a small standalone JavaScript program made of these files:

- **`app.js`**: the entry file you edit and the computer executes.
- **`README.md`** and **`README.es.md`**: the instructions, in English and Spanish.
- **`tests.js`**: the [Jest](https://jestjs.io/) script that grades your answer. You do not need to open it.
- **`solution.hide.js`**: one possible solution, hidden until you ask for it.

Found a bug or a typo? [Open an issue](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/issues) — these exercises are maintained with the help of contributors like you.

## 🤝 Contributors

Thanks goes to these wonderful people:

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr) — coder 💻, idea 🤔, build-tests ⚠️, pull-request-review 👀, build-tutorial ✅, documentation 📖
2. [Paolo (plucodev)](https://github.com/plucodev) — bug reports 🐛, coder 💻, translation 🌎
3. Ricardo Rodriguez (RickRodriguez8080) — build-tutorial ✅, documentation 📖

See the full list on the [contributors graph](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial/graphs/contributors). This project follows the all-contributors specification, and contributions of any kind are welcome.

This and many other exercises are built by students and instructors at [4Geeks Academy](https://4geeks.com) as part of its coding bootcamp.
<!-- endhide -->

function shortIntroduction(name, profession, age) {
  // Complete this function's body and arguments
  const introduction = `Hello! my name is {name}, my profession is {profession}. I am {age} years old.`;
  return introduction.replace("{name}", name)
                     .replace("{profession}", profession)
                     .replace("{age}", age);
}

// Fill the gaps with your data in the correct order
console.log(shortIntroduction("Brian ", "Grounder ", "30 "))
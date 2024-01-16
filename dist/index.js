// src/some-module/index.ts
function getInitialLetter(name) {
  return name[0];
}

// src/index.ts
function greet(name) {
  console.log(`Hello, ${name}! your initial letter is ${getInitialLetter(name)}`);
  return `Hello, ${name}!`;
}
greet("World!!");
export {
  greet
};

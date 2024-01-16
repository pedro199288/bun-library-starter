import { getInitialLetter } from './some-module';

export function greet(name: string): string {
  console.log(
    `Hello, ${name}! your initial letter is ${getInitialLetter(name)}`,
  );
  return `Hello, ${name}!`;
}

greet('World!!');

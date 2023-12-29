import { expect, test, describe } from "bun:test";
import { greet } from './index';

describe('greet', () => {
  test('should return a greeting message with the provided name', () => {
    const name = 'John';
    const expected = 'Hello, John!';
    const result = greet(name);
    expect(result).toEqual(expected);
  });
});
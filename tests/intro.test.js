import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first augument if it is greater", () => {
    // AAA arrange act assert
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const result = max(a, b);
    // Verify
    expect(result).toBe(2);
  });
  it("should return the second augument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first augument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzbuzz", () => {
  it("should return fizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if arg is only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if arg is only divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return arg's string if arg is not divisible by 5 or 3", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

//TDD
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBeNaN();
  });
  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

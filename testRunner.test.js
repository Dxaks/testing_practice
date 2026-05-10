import { capitalised, reverseStr, calculator, caeserCipher, analyzeArray } from "./main.js";


test('expect a str with first letter capitalised', () => {
    expect(capitalised('ishaka')).toBe('Ishaka')
})


test('expect to return a reverse of the original str', () => {
    expect(reverseStr('series')).toBe('seires')
})


test('expect to add two number and return the result', () => {
    expect(calculator.add(5, 5)).toBe(10);
})


test('expect to subtract from two numbers and return the result ', () => {
    expect(calculator.subtract(5,5)).toBe(0)
})


test('expect to multiply two numbers and return the result', () => {
    expect(calculator.multiply(10, 5)).toBe(50)
})


test('expect to divde two from two numbers and return the result', () => {
    expect(calculator.divide(15, 3)).toBe(5)
})


test('expect "Hello, World!" string to be "Khoor, Zruog!" string', () => {
    expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})


test('expect to return average, min, max, and length of a given arr of numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})


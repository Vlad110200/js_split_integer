'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(8, 2))
      .toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    expect(splitInteger(8, 1))
      .toEgual([8]);
});

test('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(17, 4))
      .toEgual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(4, 5))
      .toEgual(0, 1, 1, 1, 1);
});

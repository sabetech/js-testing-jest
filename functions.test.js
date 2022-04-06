const { stringLength, reverseString, Calculator, capitalizeFirstLetter } = require('./functions_for_test');


test('reverse a given string', () => {
  expect(reverseString('computer')).toBe('retupmoc');
});

test('test get length of string', () => {
  expect(stringLength('computer')).toBe(8);
});

myCalculator = new Calculator;
describe('Calculator Add Operations', () => {
  test('add 2 and 2', () => {
    expect(myCalculator.add(2, 2)).toBe(4);
  })
  
  test('add floats', () => {
    expect(myCalculator.add(2.5, 2.5)).toBe(5.0);
  })
  
  test('add negative integers', () => {
    expect(myCalculator.add(-1, 1)).toBe(0);
  });
});

describe('Calculator Subtraction Operations', () => {
  test('subtract 2 and 2', () => {
    expect(myCalculator.subtract(2, 2)).toBe(0);
  })
  
  test('subtract floats', () => {
    expect(myCalculator.subtract(2.5, 2.5)).toBe(0.0);
  })
  
  test('subtract negative integers', () => {
    expect(myCalculator.subtract(-1, 1)).toBe(-2);
  });
});

describe('Calculator Multiplication Operations', () => {
  test('Multiply 2 and 3 should be 6', () => {
    expect(myCalculator.multiply(2, 3)).toBe(6);
  })
  
  test('multiply 2 floats should be 6.25', () => {
    expect(myCalculator.multiply(2.5, 2.5)).toBe(6.25);
  })
  
  test('multiply negative integers', () => {
    expect(myCalculator.multiply(-1, 1)).toBe(-1);
  });
});

describe('Calculator Division Operations', () => {
  test('Divide 4 by 2 should be 2', () => {
    expect(myCalculator.divide(4, 2)).toBe(2);
  })
  
  test('Divide 5.5 by 2.5 should be 2.2', () => {
    expect(myCalculator.divide(5.5, 2.5)).toBe(2.2);
  })
  
  test('Divide negative integers', () => {
    expect(myCalculator.divide(-1, 1)).toBe(-1);
  });
});

test('Capitalize First Letter of string', () => {
  expect(capitalizeFirstLetter('beautiful')).toBe('Beautiful');
});
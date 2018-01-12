const evenAndOdd = require('./../src');
const expectedInvalidInputErrorMessage = 'input must be an array of numbers';
describe('The evenAndOdd function', () => {
  it(`should return ${expectedInvalidInputErrorMessage}  if an object is passed to it`, () => {
    expect(evenAndOdd({})).toBe(expectedInvalidInputErrorMessage);
  });
  
  it(`should return ${expectedInvalidInputErrorMessage}  if a string is passed to it`, () => {
    expect(evenAndOdd('SOME_INVALID_STRING')).toBe(expectedInvalidInputErrorMessage);
  });
  
  it(`should return ${expectedInvalidInputErrorMessage}  if an array of strings is passed to it`, () => {
    expect(evenAndOdd(['SOME_STRING', 4])).toBe(expectedInvalidInputErrorMessage);
  });
  
  it('should return an object of even and odd numbers in arrays if a valid array is passed into it', () => {
    expect(evenAndOdd([1, 2, 3, 4])).toEqual({
      odd: [1, 3],
      even: [2, 4]
    });
    
    expect(evenAndOdd([5, 6, 7, 8, 9, 10])).toEqual({
      odd: [5, 7, 9],
      even: [6, 8, 10]
    });
    
    expect(evenAndOdd([])).toEqual({
      odd: [],
      even: []
    });
  });
  
});
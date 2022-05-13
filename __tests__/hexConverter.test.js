import hexConverter from '../src/js/hexConverter.js';

describe('hexConverter',() => {
let hex = hexConverter(1,2,3);

test('should return the three numbers inputed, as array', () => {
  expect(hex).toEqual([1,2,3]);
});

})

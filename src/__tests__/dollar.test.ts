import { Dollar } from '../dollar';

test('times', () => {
  const five = new Dollar(5);
  
  expect(five.times(2)).toEqual(new Dollar(10));
  expect(five.times(3)).toEqual(new Dollar(15));
});

test('equals', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});

test('null equals', () => {
  const five = new Dollar(5);
  const ten = five.times(2);

  expect(ten.equals(null)).toBeFalsy();
});

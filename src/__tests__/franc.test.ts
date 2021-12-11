import { Franc } from '../franc';

test('times', () => {
  const five = new Franc(5);

  expect(five.times(2)).toEqual(new Franc(10));
  expect(five.times(3)).toEqual(new Franc(15));
});

test('equals', () => {
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
});

test('null equals', () => {
  const five = new Franc(5);
  const ten = five.times(2);

  expect(ten.equals(null)).toBeFalsy();
});

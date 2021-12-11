import { Dollar } from '../dollar';
import { Franc } from '../franc';
import { Money } from '../money';

test('equals', () => {
  expect(new Money(5).equals(new Money(5))).toBeTruthy();
  expect(new Money(5).equals(new Money(6))).toBeFalsy();
});

test('null equals', () => {
  const five = new Money(5);

  expect(five.equals(null)).toBeFalsy();
});

test('equals Franc = Dollar', () => {
  expect(new Franc(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Franc(5).equals(new Dollar(6))).toBeFalsy();
});

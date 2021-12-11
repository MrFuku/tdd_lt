// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money, Dollar, Franc } from '../money';

test('equals', () => {
  expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
  expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
});

test('null equals', () => {
  const francFive = Money.franc(5);
  expect(francFive.equals(null)).toBeFalsy();

  const dollarFive = Money.dollar(6);
  expect(dollarFive.equals(null)).toBeFalsy();
});

test('equals Franc = Dollar', () => {
  expect(Money.franc(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.franc(5).equals(Money.dollar(6))).toBeFalsy();
});

test('currency', () => {
  expect(Money.dollar(1).currency).toBe('USD');
  expect(Money.franc(1).currency).toBe('CHF');
});

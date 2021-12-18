// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money } from '../money';

test('equals', () => {
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

test('times', () => {
  const five: Money = Money.dollar(5);

  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test('simple addition', () => {
  const sum :Money = Money.dollar(5).plus(Money.dollar(5));
  expect(sum).toEqual(Money.dollar(10));
});

// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money } from '../money';
import { Bank } from '../bank';
import { Expression } from '../expression';
import { Sum } from '../sum';

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
  const sum  = Money.dollar(5).plus(Money.dollar(5));
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(Money.dollar(10)).toEqual(reduced);
});

test('testPlusReturnsSum', () => {
  const five = Money.dollar(5);
  const result = five.plus(five)
  const sum = result as Sum
  
  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
})

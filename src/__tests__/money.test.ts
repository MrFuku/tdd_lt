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

test('test reduce sum', () => {
  const sum  = Money.dollar(3).plus(Money.dollar(4));
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(Money.dollar(7)).toEqual(reduced);
});

test('test plus returns sum', () => {
  const five = Money.dollar(5);
  const result = five.plus(five)
  const sum = result as Sum

  expect(five).toEqual(sum.augend);
  expect(five).toEqual(sum.addend);
})

test('test reduce money', () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), 'USD');
  expect(Money.dollar(1)).toEqual(result);
})

test('test identity rate', () => {
  const bank = new Bank();
  const rate = bank.rate('USD', 'USD');

  expect(1).toEqual(rate);
})

test('test reduce money different currency', () => {
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(Money.franc(2), 'USD');
  expect(Money.dollar(1)).toEqual(result);
})

test('test mixed addtion', () => {
  const fiveBucks :Expression = Money.dollar(5);
  const tenFrancs :Expression = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
  expect(result).toEqual(Money.dollar(10));
})

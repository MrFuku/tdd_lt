// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money } from '../money';
import { Bank } from '../bank';
import { Expression, roundCalculate } from '../expression';
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

test('other object equals', () => {
  const other = {hoge: 1} as unknown as Money;
  expect(Money.dollar(5).equals(other)).toBeFalsy();

  // NOTE: TypeScript は undefined === 5 はエラーにならずに通ってしまう
  expect(undefined === 5).toBeFalsy();
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
  const fiveBucks: Money = Money.dollar(5);
  const fiveFrancs: Money = Money.franc(5);

  expect(fiveBucks.times(2)).toEqual(Money.dollar(10));
  expect(fiveBucks.times(3)).toEqual(Money.dollar(15));
  expect(fiveFrancs.times(2)).toEqual(Money.franc(10));
  expect(fiveFrancs.times(3)).toEqual(Money.franc(15));
});

test('test reduce sum', () => {
  const sum  = Money.dollar(3).plus(Money.dollar(4));
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(reduced).toEqual(Money.dollar(7));

  const sumDecimal = Money.dollar(0.7715).plus(Money.dollar(0.177));
  const reducedDecimal = bank.reduce(sumDecimal, 'USD');
  expect(reducedDecimal).toEqual(Money.dollar(0.9485));
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

test('test sum plus money', () => {
  const fiveBucks :Expression = Money.dollar(5);
  const tenFrancs :Expression = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);

  const sum :Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, 'USD');
  expect(result).toEqual(Money.dollar(15));
})

test('test sum times', () => {
  const fiveBucks :Expression = Money.dollar(5);
  const tenFrancs :Expression = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);

  const sum :Expression = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, 'USD');
  expect(result).toEqual(Money.dollar(20));
})

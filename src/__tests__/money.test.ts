// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money, Dollar, Franc } from '../money';

test('equals', () => {
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});

test('null equals', () => {
  const francFive = new Franc(5);
  expect(francFive.equals(null)).toBeFalsy();

  const dollarFive = new Dollar(6);
  expect(dollarFive.equals(null)).toBeFalsy();
});

test('equals Franc = Dollar', () => {
  expect(new Franc(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Franc(5).equals(new Dollar(6))).toBeFalsy();
});

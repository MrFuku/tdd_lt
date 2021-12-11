import { Money } from '../money';

test('equals', () => {
  expect(new Money(5).equals(new Money(5))).toBeTruthy();
  expect(new Money(5).equals(new Money(6))).toBeFalsy();
});

test('null equals', () => {
  const five = new Money(5);

  expect(five.equals(null)).toBeFalsy();
});

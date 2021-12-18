// import { Franc } from '../franc';
import { Money, Franc } from '../money';

test('times', () => {
  const five: Money = Money.franc(5);

  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
});


// import { Franc } from '../franc';
import { Money, Franc } from '../money';

test('times', () => {
  const five: Money = Money.franc(5);

  expect(five.times(2)).toEqual(new Franc(10));
  expect(five.times(3)).toEqual(new Franc(15));
});


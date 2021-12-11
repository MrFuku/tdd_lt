// import { Dollar } from '../dollar';
import { Money, Dollar } from '../money';

test('times', () => {
  const five: Money = Money.dollar(5);

  expect(five.times(2)).toEqual(new Dollar(10));
  expect(five.times(3)).toEqual(new Dollar(15));
});

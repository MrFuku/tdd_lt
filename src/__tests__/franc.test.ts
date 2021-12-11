import { Franc } from '../franc';

test('times', () => {
  const five = new Franc(5);

  expect(five.times(2)).toEqual(new Franc(10));
  expect(five.times(3)).toEqual(new Franc(15));
});


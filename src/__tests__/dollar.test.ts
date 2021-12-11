import { Dollar } from '../dollar';

test('times', () => {
  const five = new Dollar(5);
  
  expect(five.times(2).amount).toBe(10);
  expect(five.times(3).amount).toBe(15);
});

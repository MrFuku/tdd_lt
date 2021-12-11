import { Dollar } from '../dollar';

test('times', () => {
  /* 
    「$5 * 2 = $10」のテスト
      現状では以下の問題点あり
        ・フィールドは public
        ・コードには副作用がある
        ・金額なのに int型を使っている
   */
  const five = new Dollar(5);
  five.times(2)
  expect(five.amount).toBe(10);
});

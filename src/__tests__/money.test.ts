// import { Dollar } from '../dollar';
// import { Franc } from '../franc';
import { Money } from "../money";
import { Bank } from "../bank";
import { Expression, roundCalculate } from "../expression";
import { Sum } from "../sum";

describe("Money", () => {
  describe("同値判定できる", () => {
    test("equals", () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });

    test("null equals", () => {
      const francFive = Money.franc(5);
      expect(francFive.equals(null)).toBeFalsy();

      const dollarFive = Money.dollar(6);
      expect(dollarFive.equals(null)).toBeFalsy();
    });

    test("other object equals", () => {
      const other = { hoge: 1 } as unknown as Money;
      expect(Money.dollar(5).equals(other)).toBeFalsy();

      // NOTE: TypeScript は undefined === 5 はエラーにならずに通ってしまう
      expect(undefined === 5).toBeFalsy();
    });

    test("equals Franc = Dollar", () => {
      expect(Money.franc(5).equals(Money.dollar(5))).toBeTruthy();
      expect(Money.franc(5).equals(Money.dollar(6))).toBeFalsy();
    });
  });

  describe("通貨の概念が正しい", () => {
    test("currency", () => {
      expect(Money.dollar(1).currency).toBe("USD");
      expect(Money.franc(1).currency).toBe("CHF");
    });

    test("同じ通貨同士の加算の戻り値はMoneyオブジェクトになる", () => {
      const fiveBucks = Money.dollar(5);
      const resultBucks = fiveBucks.plus(fiveBucks) as Money;
      expect(resultBucks).toBeInstanceOf(Money);
      expect(resultBucks.currency).toBe(fiveBucks.currency);

      const fiveFrancs = Money.franc(5);
      const resultFrancs = fiveFrancs.plus(fiveFrancs) as Money;
      expect(resultFrancs).toBeInstanceOf(Money);
      expect(resultFrancs.currency).toBe(fiveFrancs.currency);
    });
  });
});

describe("通貨の計算ができる", () => {
  let bank: Bank;
  beforeEach(() => {
    bank = new Bank();
  });

  test("整数の計算ができる", () => {
    const sum = Money.dollar(3).plus(Money.dollar(4));
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(7));
  });

  test("丸め誤差が発生しない計算ができる", () => {
    const sumDecimal = Money.dollar(0.7715).plus(Money.dollar(0.177));
    const reducedDecimal = bank.reduce(sumDecimal, "USD");
    expect(reducedDecimal).toEqual(Money.dollar(0.9485));
  });

  test("整数の掛け算ができる", () => {
    const fiveBucks: Money = Money.dollar(5);
    const fiveFrancs: Money = Money.franc(5);

    expect(fiveBucks.times(2)).toEqual(Money.dollar(10));
    expect(fiveBucks.times(3)).toEqual(Money.dollar(15));
    expect(fiveFrancs.times(2)).toEqual(Money.franc(10));
    expect(fiveFrancs.times(3)).toEqual(Money.franc(15));
  });

  test("異なる通貨間の3回以上の計算", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(15));
  });

  test("加算と乗算を組み合わせた計算ができる", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(20));
  });
});

describe("為替", () => {
  test("同じ通貨間のレートは1", () => {
    const bank = new Bank();
    const rate = bank.rate("USD", "USD");

    expect(1).toEqual(rate);
  });

  test("適切なレートで為替される", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(Money.dollar(1)).toEqual(result);
  });

  test("異なる通貨の加算においてレートを考慮して計算できる", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
    expect(result).toEqual(Money.dollar(10));
  });
});

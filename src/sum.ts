import { Bank } from "./bank";
import { Expression, roundCalculate } from "./expression";
import { Currency, Money } from "./money";

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }

  reduce(bank: Bank, to: Currency):Money {
    const amount :number = roundCalculate(this.augend.reduce(bank, to).amount, this.addend.reduce(bank, to).amount);
    return new Money(amount, to);
  }
}

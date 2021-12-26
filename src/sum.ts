import { Bank } from "./bank";
import { Expression } from "./expression";
import { Currency, Money } from "./money";

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {
  }

  reduce(bank: Bank, to: Currency):Money {
    const amount :number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

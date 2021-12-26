import { Money } from "./money";

export class Sum {
  constructor(public augend: Money, public addend: Money) {
  }

  reduce(to: string):Money {
    const amount :number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

import { Expression } from "./expression";
import { Sum } from "./sum";

export class Money implements Expression {
  constructor(public readonly amount: number, public readonly currency: string) {
  }

  static dollar(amount: number):Money {
    return new Money(amount, 'USD')
  }

  static franc(amount: number):Money {
    return new Money(amount, 'CHF')
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  equals(money: Money | null) {
    if (money === null) {
        return false;
    }

    return this.amount === money.amount
  }

  toString() {
    return `${this.amount} ${this.currency}`
  }

  plus(addend: Money):Expression {
    return new Sum(this, addend);
  }

  reduce(to: string): Money {
    const rate = this.currency === 'CHF' && to === 'USD' ? 2 : 1;
    return new Money(this.amount / rate, to)
  }
}

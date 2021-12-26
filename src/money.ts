import { Bank } from "./bank";
import { Expression } from "./expression";
import { Sum } from "./sum";

export type Currency = 'CHF' | 'USD';

export class Money implements Expression {
  constructor(public readonly amount: number, public readonly currency: Currency) {
  }

  static dollar(amount: number):Money {
    return new Money(amount, 'USD')
  }

  static franc(amount: number):Money {
    return new Money(amount, 'CHF')
  }

  times(multiplier: number): Expression {
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

  plus(addend: Expression):Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: Currency): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}

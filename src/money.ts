import { Expression } from "./expression";

export class Money implements Expression {
  constructor(protected readonly amount: number, public readonly currency: string) {
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
    return new Money(this.amount + addend.amount, this.currency)
  }
}

// import { Dollar } from "./dollar";
// import { Franc } from "./franc";

export class Money {
  constructor(protected readonly amount: number, public readonly currency: string) {
  }

  static dollar(amount: number):Dollar {
    return new Dollar(amount, 'USD')
  }

  static franc(amount: number):Franc {
    return new Franc(amount, 'CHF')
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
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

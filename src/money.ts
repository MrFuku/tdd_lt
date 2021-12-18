// import { Dollar } from "./dollar";
// import { Franc } from "./franc";

export abstract class Money {
  constructor(protected readonly amount: number, public readonly currency: string) {
  }

  static dollar(amount: number):Dollar {
    return new Dollar(amount, 'USD')
  }

  static franc(amount: number):Franc {
    return new Franc(amount, 'CHF')
  }

  abstract times(multiplier: number): Money

  equals(money: Money | null) {
    if (money === null) {
        return false;
    }

    return this.amount === money.amount
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier, this.currency)
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier, this.currency)
  }
}

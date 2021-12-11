export class Dollar {
  constructor(public amount: number) {
    this.amount = amount
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(dollar: Dollar) {
    return this.amount === dollar.amount
  }
}

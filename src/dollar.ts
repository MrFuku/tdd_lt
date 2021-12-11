export class Dollar {
  constructor(public amount: number) {
    this.amount = amount
  }

  times(multiplier: number) {
    this.amount *= multiplier
  }
}

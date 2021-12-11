export class Dollar {
  private tmpAmount: number

  constructor(public amount: number) {
    this.tmpAmount = amount
    this.amount = amount
  }

  times(multiplier: number) {
    this.amount = this.tmpAmount * multiplier
  }
}

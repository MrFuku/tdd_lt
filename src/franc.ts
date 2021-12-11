export class Franc {
  constructor(private readonly amount: number) {
}

  times(multiplier: number) {
    return new Franc(this.amount * multiplier)
  }

  equals(franc: Franc | null) {
    if (franc === null) {
        return false;
    }

    return this.amount === franc.amount
  }
}

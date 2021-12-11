export class Dollar {
  constructor(private readonly amount: number) { 
}

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(dollar: Dollar | null) {
    if (dollar === null) {
        return false;
    }

    return this.amount === dollar.amount
  }
}

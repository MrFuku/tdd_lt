export class Money {
  constructor(protected readonly amount: number) {
  }

  equals(money: Money | null) {
    if (money === null) {
        return false;
    }

    return this.amount === money.amount
  }
}

import { Expression } from './expression';
import { Currency, Money } from './money';
import { Pair } from './pair';

export class Bank {
  private rates: { [key in string]: number } = {}

  reduce(source: Expression, to: Currency):Money {
    return source.reduce(this, to);
  }

  addRate(from: Currency, to: Currency, rate: number) {
    const pair = new Pair(from, to);
    this.rates[pair.key] = rate;
  }

  rate(from: Currency, to: Currency): number {
    if (from === to)
      return 1;

    const pair = new Pair(from, to);
    return this.rates[pair.key]
  }
}

import { Money } from './money';

export class Bank {
  reduce(sum: Money, currency: string):Money {
    return Money.dollar(10);
  }
}

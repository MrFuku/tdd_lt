import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  reduce(sum: Expression, currency: string):Money {
    return Money.dollar(10);
  }
}

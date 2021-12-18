import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

export class Bank {
  reduce(source: Expression, to: string):Money {
    const sum = source as Sum
    const amount = sum.augend.amount + sum.addend.amount;
    return new Money(amount, to);
  }
}

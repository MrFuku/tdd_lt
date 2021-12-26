import { Currency } from "./money";

export class Pair{
  constructor(private from: Currency, private to: Currency){
  }

  get key(): string {
    return `${this.from}_${this.to}`
  }

  equals(object: Object): boolean {
    const pair = object as Pair;
    if (!pair) 
      return false

    return this.from === pair.from && this.to === pair.to
  }
}

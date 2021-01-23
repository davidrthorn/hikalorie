import { day } from "./deps.ts";

class Energy {
  public calories: number;

  constructor(calories: number) {
    this.calories = calories;
  }

  get joules(): number {
    return this.calories * 4184;
  }
}

class Length {
  private value: number;
  private units: { [key: string]: number } = {
    meters: 1,
    miles: 1609,
    kms: 1000,
    cm: 0.01,
  };

  constructor(value: number, unit: string = "gram") {
    this.value = value * this.units[unit];
  }

  get cm(): number {
    return this.value / this.units.cm;
  }

  get meters(): number {
    return this.value;
  }

  add(l: Length): Length {
    return new Length(this.meters + l.meters);
  }
}

class Person {
  public height: Length;
  public weight: Weight;
  public personalConstant: number;

  constructor(height: Length, weight: Weight, personalConstant: number) {
    this.height = height;
    this.weight = weight;
    this.personalConstant = personalConstant;
  }
}

class Route {
}

class Surface {
}

class Stretch {
}

class Weight {
  private value: number;
  private units: { [key: string]: number } = {
    grams: 1,
    lbs: 456,
    stone: 6350,
    kgs: 1000,
  };

  constructor(value: number, unit: string = "gram") {
    this.value = value * this.units[unit];
  }

  get grams(): number {
    return this.value;
  }

  get kgs(): number {
    return this.value / this.units.kgs;
  }

  add = (w: Weight) => new Weight(this.grams + w.grams);
}

class Duration {
  private value: number;
  private units: { [key: string]: number } = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
  };

  constructor(value: number, unit: string = "seconds") {
    this.value = value * this.units[unit];
  }

  get seconds() {
    return this.value;
  }

  get hours() {
    return this.value / this.units.hours;
  }

  get minutes() {
    return this.value / this.units.minutes;
  }
}

export { Duration, Energy, Length, Weight };

import { day } from "./deps.ts";

class Energy {
  public calories: number;

  constructor(calories: number) {
    this.calories = calories;
  }

  subtract(e: Energy): Energy {
    return new Energy(this.calories - e.calories);
  }

  divide(n: number): Energy {
    return new Energy(this.calories / n);
  }
}

class Length {
  private value: number;
  private units: { [key: string]: number } = {
    m: 1,
    ml: 1609,
    km: 1000,
    cm: 0.01,
    ft: 0.3048,
  };

  constructor(value: number, unit: string = "gram") {
    this.value = value * this.units[unit];
  }

  get cm(): number {
    return this.value / this.units.cm;
  }

  get m(): number {
    return this.value;
  }

  get ft(): number {
    return this.value / this.units.ft;
  }
}

class Person {
  public height: Length;
  public weight: Weight;
  public age: number;
  public sex: "m" | "f";

  constructor(height: Length, weight: Weight, age: number, sex: "m" | "f") {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.sex = sex;
  }

  get bmr(): Energy {
    const base = (10 * this.weight.kg) + (6.25 * this.height.cm) -
      (5 * this.age);
    const cals = this.sex == "m" ? base + 5 : base - 161;
    return new Energy(cals);
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
    g: 1,
    lb: 456,
    st: 6350,
    kg: 1000,
  };

  constructor(value: number, unit: "g" | "lb" | "st" | "kg" = "kg") {
    this.value = value * this.units[unit];
  }

  get g(): number {
    return this.value;
  }

  get kg(): number {
    return this.value / this.units.kg;
  }
}

class Duration {
  private value: number;
  private units: { [key: string]: number } = {
    s: 1,
    m: 60,
    hr: 3600,
  };

  constructor(value: number, unit: "s" | "m" | "hr" = "hr") {
    this.value = value * this.units[unit];
  }

  get s() {
    return this.value;
  }

  get hr() {
    return this.value / this.units.hr;
  }

  get m() {
    return this.value / this.units.m;
  }
}

export { Duration, Energy, Length, Person, Weight };

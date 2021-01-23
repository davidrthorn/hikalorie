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
  public cm: number;
  units = {
    in: 2.54,
    mile: 160934.4,
    m: 100,
    km: 1000,
  };

  constructor(cm: number) {
    this.cm = cm;
  }

  add(l: Length): Length {
    return new Length(this.cm + l.cm);
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
  public kg: number;
  units = {
    lb: 0.453592,
    stone: 6.35029,
  };

  constructor(kg: number) {
    this.kg = kg;
  }

  add(w: Weight) {
    return new Weight(this.kg + w.kg);
  }
}

class Duration {
  public seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }
}

class Velocity {
  private distance: Length;
  private duration: Duration;

  constructor(distance: Length, duration: Duration) {
    this.distance = distance;
    this.duration = duration;
  }
}

class CalorieCalculator {
  calculate(person: Person, stretch: Stretch, surface: Surface) {
  }
}

export { Energy };

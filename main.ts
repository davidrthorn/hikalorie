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

  subtract(l: Length): Length {
    return new Length(this.cm - l.cm);
  }

  multiplyBy(l: Length): Length {
    return new Length(this.cm * l.cm);
  }

  divideBy(l: Length): Length {
    return new Length(this.cm / l.cm);
  }
}

class Person {
  public height;
  public weight;
  public personalConstant;

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

  constructor(kg: number) {
    this.kg = kg;
  }
}

class CalorieCalculator {
  calculate(person: Person, stretch: Stretch, surface: Surface) {
  }
}

export { Energy };

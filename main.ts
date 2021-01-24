import { Energy, Length, Weight } from "./measure.ts";

class Person {
  constructor(
    public height: Length,
    public weight: Weight,
    public age: number,
    public sex: "m" | "f",
  ) {
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

export { Length, Person, Route };

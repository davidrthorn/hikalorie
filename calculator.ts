import { Person } from "./main.ts";
import { Duration, Energy, Length, Weight } from "./measure.ts";
import Walk from "./walk.ts";

// 1.44 + 1.94*S^0.43 + 0.24*S^4 + 0.34*S*G*(1-1.05^(1-1.1^(G+32)))

export default class CalorieCalculator {
  wattsPerKg(
    gradient: number,
    distance: Length,
    time: Duration,
  ) {
    const velocity = distance.m / time.s;

    return 1.44 +
      1.94 * velocity ** 0.43 +
      0.24 * velocity ** 4 +
      0.34 * velocity * gradient *
        (1 - 1.05 ** (1 - 1.1 ** (gradient + 32)));
  }

  energy(wattsPerKg: number, duration: Duration, person: Person) {
    const cals = wattsPerKg * duration.hr * person.weight.kg;
    const energy = new Energy(cals);

    return energy.subtract(person.bmr.divide(24));
  }

  calculate(
    person: Person,
    walk: Walk,
    gradient: number,
  ): Energy {
    const wpkg = this.wattsPerKg(gradient, walk.distance, walk.duration);
    return this.energy(wpkg, walk.duration, person);
  }
}

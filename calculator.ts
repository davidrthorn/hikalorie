import { Duration, Energy, Length, Weight } from "./main.ts";

// 1.44 + 1.94*S^0.43 + 0.24*S^4 + 0.34*S*G*(1-1.05^(1-1.1^(G+32)))

export default class CalorieCalculator {
  wattsPerKg(
    gradient: number,
    distance: Length,
    time: Duration,
  ) {
    const velocity = distance.meters / time.seconds;

    return 1.44 +
      1.94 * velocity ** 0.43 +
      0.24 * velocity ** 4 +
      0.34 * velocity * gradient *
        (1 - 1.05 ** (1 - 1.1 ** (gradient + 32)));
  }

  energy(wattsPerKg: number, duration: Duration, weight: Weight) {
    return new Energy(wattsPerKg * weight.kgs * duration.hours);
  }

  calories(
    weight: Weight,
    duration: Duration,
    distance: Length,
    gradient: number,
  ) {
    const wpkg = this.wattsPerKg(gradient, distance, duration);
    const energy = this.energy(wpkg, duration, weight);
    return energy.calories;
  }
}

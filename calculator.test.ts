import { assertEquals } from "./dev.deps.ts";
import { Person } from "./main.ts";
import { Duration, Length, Weight } from "./measure.ts";
import Walk from "./walk.ts";
import CalorieCalculator from "./calculator.ts";

Deno.test({
  name: "CalorieCounter: calculate energy expenditure works",
  fn(): void {
    const volunteer = new Person(new Length(6, "ft"), new Weight(89), 34, "m");
    const walk = new Walk(new Length(4, "ml"), new Duration(1, "hr"));
    const sut = new CalorieCalculator();
    const got = sut.calculate(volunteer, walk, 0)
      .calories;
    assertEquals(Math.round(got), 490);
  },
});

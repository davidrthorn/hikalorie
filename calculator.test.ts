import { assertEquals } from "./dev.deps.ts";
import { Duration, Length, Person, Weight } from "./main.ts";
import CalorieCalculator from "./calculator.ts";

Deno.test({
  name: "CalorieCounter: calculate energy expenditure works",
  fn(): void {
    const volunteer = new Person(new Length(6, "ft"), new Weight(89), 34, "m");
    const sut = new CalorieCalculator();
    const got =
      sut.calculate(volunteer, new Duration(1), new Length(4, "ml"), 0)
        .calories;
    assertEquals(Math.round(got), 490);
  },
});

import { assertEquals } from "./dev.deps.ts";
import { Duration, Length, Weight } from "./main.ts";
import CalorieCalculator from "./calculator.ts";

Deno.test({
  name: "CalorieCounter: calculate energy expenditure works",
  fn(): void {
    const sut = new CalorieCalculator();
  },
});

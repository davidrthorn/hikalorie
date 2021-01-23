import { assertEquals } from "./dev.deps.ts";
import { Energy } from "./main.ts";

Deno.test({
  name: "Energy returns correct joules",
  fn() {
    const e = new Energy(100);
    assertEquals(e.joules, 418400);
  },
});

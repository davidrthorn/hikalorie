import { Route } from "./main.ts";
import { Duration, Length } from "./measure.ts";

export default class Walk {
  constructor(
    public distance: Length,
    public duration: Duration,
    public route?: Route,
  ) {
  }
}

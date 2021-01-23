class Energy {
  calories: number;

  constructor(calories: number) {
    this.calories = calories;
  }

  get joules(): number {
    return this.calories * 4184;
  }
}

class Height {
}

class Person {
}

class Route {
}

class Surface {
}

class Stretch {
}

class Weight {
}

export { Energy };

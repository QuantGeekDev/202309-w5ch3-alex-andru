import Personaje from "../Personaje/Personaje.js";

class Rey extends Personaje {
  yearsOfRule;
  constructor(yearsOfRule, name, family, age) {
    super(name, family, age);
    this.yearsOfRule = yearsOfRule;
  }

  communicate() {
    const announcement = "Vais a morir todos";
    return super.communicate(announcement);
  }
}

export default Rey;

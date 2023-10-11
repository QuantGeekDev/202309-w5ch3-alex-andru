import Personaje from "../Personaje/Personaje";

class Rey extends Personaje {
  yearsOfRule;
  constructor(yearsOfRule, name, family, age, isAlive) {
    super(name, family, age, isAlive);
    this.yearsOfRule = yearsOfRule;
  }
}

export default Rey;

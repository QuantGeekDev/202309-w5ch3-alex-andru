import Personaje from "../Personaje/Personaje.js";

class Escudero extends Personaje {
  master;
  suckUpLevel;

  constructor(master, suckUpLevel, name, family, age) {
    super(name, family, age);
    this.master = master;
    this.suckUpLevel = suckUpLevel;
  }

  communicate() {
    const announcement = "Soy un loser";
    return super.communicate(announcement);
  }
}

export default Escudero;

import Personaje from "../Personaje/Personaje.js";

class Luchador extends Personaje {
  weaponOfChoice;
  dexterity;

  constructor(weaponOfChoice, dexterity, name, family, age) {
    super(name, family, age);
    this.weaponOfChoice = weaponOfChoice;
    this.dexterity = dexterity;
  }

  communicate() {
    const announcement = "Primero pego y luego pregunto";
    return super.communicate(announcement);
  }
}

export default Luchador;

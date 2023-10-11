import Personaje from "../Personaje/Personaje.js";

class Asesor extends Personaje {
  assessee;
  constructor(assessee, name, age, family) {
    super(name, family, age);
    this.assessee = assessee;
  }

  communicate() {
    const announcement = "No se por que, creo que voy a morir pronto";
    return super.communicate(announcement);
  }
}

export default Asesor;

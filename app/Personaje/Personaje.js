class Personaje {
  name;
  family;
  age;
  isAlive;
  show = "Game of Thrones";

  constructor(name, family, age, isAlive = false) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  communicate() {
    return "";
  }
}

export default Personaje;

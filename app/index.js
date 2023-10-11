import Rey from "./Rey/Rey.js";
import Escudero from "./Escudero/Escudero.js";
import Asesor from "./Asesor/Asesor.js";
import Luchador from "./Luchador/Luchador.js";

const joffrey = new Rey(5, "Joffrey", "Baratheon", 20);
const jaime = new Luchador("sword", 10, "Jaime", "Lannister", 35);
const daenerys = new Luchador("mace", 10, "Daenerys", "Targaryen", 45);
const tyrion = new Asesor(joffrey, "Tyrion", 29, "Lannister");
const bron = new Escudero(jaime, 9, "Bronn", "Baratheon", 50);

const characters = [joffrey, jaime, daenerys, tyrion, bron];

const communicateCharacters = (characters) => {
  characters.forEach((character) => {
    console.log(character.communicate());
  });
};

console.log(tyrion.show);
communicateCharacters(characters);
jaime.die();
tyrion.die();

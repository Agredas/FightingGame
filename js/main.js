
const cambiaPantalla = (valor) => {

  //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
  //por parámetro.
  let faseDestino = "fase" + valor;

  //A continuación creo un array con todas fases.
  let arrayFases = ["fase1","fase2","fase3"];

  //El siguiente paso es incluir en arrayfases, todas las fases MENOS la de destino, para ello usamos
  //filter.
  arrayFases = arrayFases.filter(val => !faseDestino.includes(val));

  //Primero habilitamos la fase a la que queremos ir

  document.getElementById(faseDestino).style.display = "block";

  //Finalmente deshabilitamos el resto

  for(let pantalla of arrayFases){
      document.getElementById(pantalla).style.display = "none";
  }
}

class Fighter{

  constructor(name, health, strength, defense, luck){
  
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.luck = luck;
      
  }
}


let player1 = new Fighter("Jedi", 100, 20, 20, 5);

let player2 = new Fighter("Mandalorian", 100, 22, 19, 4);

let player3 = new Fighter("Sith", 100, 24, 17, 3);

let player4 = new Fighter("Wookie", 100, 20, 25, 0);
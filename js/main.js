
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

  constructor(name, health, strength, defense, origin, luck){
  
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.origin = origin;
    this.luck = luck;
      
  }
}


let jedi = new Fighter("Jedi", 100, 20, 20, "Jedi Order", 5);
let mandalorian = new Fighter("Mandalorian", 100, 22, 19, "Mandalore", 4);
let sith = new Fighter("Sith", 100, 24, 17, "Korriban", 3);
let wookie = new Fighter("Wookie", 100, 20, 25, "Kashyyyk", 0);


let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

const cambiaPantalla = (valor) => {

  //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
  //por parámetro.
  let faseDestino = "fase" + valor;
  
  //A continuación creo un array con todas fases.
  let arrayFases = ["fase1","fase2","fase3", "fase4"];
  
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
  
  constructor(name, hp, damage, defense, luck, img){
    
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.defense = defense;
    this.luck = luck;
    this.img = img;
    
  }
  
  attack = (enemy) => {
    
    let damage = this.dmg -= enemy.armor;
    
    if (damage < 0){
      damage = 0;
    }
    
    enemy.hp = enemy.hp - damage
    
    /* console.log("Daño: ", damage); */
    
  }
}

let jedi = new Fighter("Jedi", 100, 20, 20, 5, "../img/jedi_left.png");
let mandalorian = new Fighter("Mandalorian", 100, 22, 19, 4, "../img/mandalorian_left.png");
let sith = new Fighter("Sith", 100, 24, 17, 3, "../img/sith_left.png");
let wookie = new Fighter("Wookie", 100, 20, 25, 0, "../img/wookie_left.png");


let turn = 1;
const pressAttack = () => {
  
  turn++;
  
  if (turn % 2 === 0) {
      pjSelect1.attack(pjSelect2);
      features();
   }else{
      pjSelect2.attack(pjSelect1);
      features();
   }

  if (pjSelect1.hp >= 1 || pjSelect2.hp >= 1){

     buttonAttack = document.getElementById("buttonAttack").style.display = "block";

  }else{
  
     buttonAttack = document.getElementById("buttonAttack").style.display = "none";
    
  }

  console.log("pjSelect2", pjSelect2.hp);
  console.log("pjSelec1", pjSelect1.hp);

  if (pjSelect1.hp <= 0 || pjSelect2.hp <= 0){

    cambiaPantalla(4);
  }
}



let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");


let pjSelect1 = "";
let pjSelect2 = "";


const choosePJ = (event) => {
  
  let selection = event.target.id;

  if(pjSelect1 === ""){
    
    pjSelect1 = selection;

    pjSelect1 = idCh(selection);
    
    let textSelection = document.getElementById("textSelection");
  textSelection.innerText = "Select a 2º character.";

  }else{
    pjSelect2 = idCh(selection);
    cambiaPantalla(3);
  }

  if(pjSelect1 === pjSelect2) {

    let textSelection = document.getElementById("textSelection");
    textSelection.innerText = "Select other character, please."
    cambiaPantalla(2);

  }

}




player1.addEventListener("click", choosePJ)
player2.addEventListener("click", choosePJ)
player3.addEventListener("click", choosePJ)
player4.addEventListener("click", choosePJ)


const idCh = (id) => {

  switch (id) {

      case "player1":
          return jedi;
      
      case "player2":
          return mandalorian;

      case "player3":
          return sith;

      case "player4":
          return wookie;

      default:
          "Choose a character, please."
      break;
  }

}


const features = (event) => {

  document.getElementById("pjSelect1Img").src = pjSelect1.img;
  document.getElementById("pjSelect1Name").innerText = pjSelect1.name;
  document.getElementById("pjSelect1Hp").innerText = pjSelect1.hp;
  
  document.getElementById("pjSelect2Img").src = pjSelect2.img;
  document.getElementById("pjSelect2Name").innerText = pjSelect2.name;
  document.getElementById("pjSelect2Hp").innerText = pjSelect2.hp;

}


const winner = () => {
    
  if (pjSelect1.vida <= 0) {

      document.getElementById("winner").src = pjSelect2.imagen;

      document.getElementById("winnerText").innerText = `${pjSelect2.nombre}`;

  } else {
      
      document.getElementById("winner").src = pjSelect1.imagen;

      document.getElementById("winnerText").innerText = `${pjSelect1.nombre}`;
  }

}


const lifeCharacter = () => {

  document.getElementById("pjSelect1Hp").style.width = pjSelect1.hp - "%";
  document.getElementById("pjSelect2Hp").style.width = pjSelect2.hp - "%";

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

//per centrare il draw, trovo l'ampiezza della pagina'windowWidth'
//divido a metà la 'windowWidth', per trovare il centro
//trovo l'ampiezza del draw e la divido per 2
//Sottraggo la metà del draw alla metà dell'ampiezza
//--> trovo il punto di partenza (x,y) da cui partire
  let xStart = windowWidth/2 - 150;
  let yStart = windowHeight/2 - 150;

//ciclo for per fare righe e colonne
//il quadrato si ripete, massimo fino a 3, in direzione di x e di y
//variabile i= riga; variabile j=colonna
//100 è la larghezza di righe e colonne
//100 * i/j, mi fa moltipica righe e colonne
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      drawSquare(yStart + 100 * i, xStart + 100 * j);
    }
  }
}

//funzione per disegnare il quadrato
//line, column: 
function drawSquare(line, column) {
  fill("#0000"); //fill trasparente
  stroke(0,75);

//ciclo for per ripetere il quadrato su se stesso
//viene ripetuto per un massimo di 10 volte
//90, 90, sono larghezza e altezza
//random, il punto 
//x: column+random = per ogni colonna, la x varia tra i valori 20 e 35
//y: line+random = per ogni linea, la y varia tra i valori 20 e 35
  for(let i=0; i<10; i++) {
    rect(column + random(20, 35), line + random(20, 35), 90, 90);
  }
}




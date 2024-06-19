let game_zone = document.getElementById('game-zone'),
    contex = game_zone.getContext('2d'),
    ballRadius = 9,
    x = game_zone.width / (Math.floor(Math.random() * Math.random() * 10) + 3),
    y = game_zone.height - 40,
    dx = 2,
    dy = -2;

// Posicion de la barra
let barraAlto = 25
let barraAncho = 100
let barraPos = (game_zone.width - barraAncho) / 2;

// Bloques
let row = 5
let column = 9
let bloqueAncho = 54
let bloqueAlto = 18
let bloqueEspacio = 12
let topOff = 40
let left = 33
let puntaje = 0

// Bloques que apareceran
let bloques = [];
for (let i = 0; i < column; i++) {
  bloques[i] = [];
  for (let j = 0; j < row; j++) {
    bloques[i][j] = { x: 0, y: 0, status: 1 };
  }
}

// Ver si el mouse se mueve
document.addEventListener("mousemove", mouseMove, false);

// Mover la barra cone l mouse
function mouseMove(e) {
  let positionX = e.clientX - game_zone.offsetLeft;
  if (positionX > 0 && positionX < game_zone.width) {     
    barraPos = positionX - barraAncho / 2;
  }
}

// para la barra
function Barra() {
    contex.beginPath();
    contex.roundRect(barraPos, game_zone.height - barraAlto, barraAncho, barraAlto, 0);
    contex.fillStyle = '#519BF5';
    contex.fill();
    contex.closePath();
}

// Bola
function Bola() {
    contex.beginPath();
    contex.arc(x, y, ballRadius, 0, Math.PI * 2);
    contex.fillStyle = '#519BF5';
    contex.fill();
    contex.closePath();
}

// Bloques
function Bloques() {
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (bloques[i][j].status === 1) {
        let bloqueX = (i * (bloqueAncho + bloqueEspacio)) + left;
        let bloqueY = (j * (bloqueAlto + bloqueEspacio)) + topOff;
        bloques[i][j].x = bloqueX;
        bloques[i][j].y = bloqueY;
        contex.beginPath();
        contex.roundRect(bloqueX, bloqueY, bloqueAncho, bloqueAlto, 0);
        contex.fillStyle = '#333';
        contex.fill();
        contex.closePath();
      }
    }
  }
}

// Puntaje
function Puntaje() {
  contex.font = 'bold 16px sans-serif';
  contex.fillStyle = '#333';
  contex.fillText('Puntaje : ' + puntaje, 8, 24);
}

// Se verifica si la bola pego
function hitDetection() {
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      let b = bloques[i][j];
      if (b.status === 1) {
        if (x > b.x && x < b.x + bloqueAncho && y > b.y && y < b.y + bloqueAlto) {
          dy = - dy;
          b.status = 0;
          puntaje ++;

          // GANAMOS?
          if (puntaje === row * column) {
            alert('GANASTE');
            document.location.reload();
          }
        }
      }
    }
  }
}

// Main function
function MAIN() {
    contex.clearRect(0, 0, game_zone.width, game_zone.height);
    Puntaje();
    Bloques();
    Bola();
    Barra();
    hitDetection();

    // Detectar los muros
    if (x + dx > game_zone.width - ballRadius || x + dx < ballRadius) {
        dx = - dx;
    }

    // Detectar techo
    if (y + dy < ballRadius) {
        dy = - dy;
    } else if (y + dy > game_zone.height - ballRadius) {

        // Detectar la barra
        if (x > barraPos && x < barraPos + barraAncho) {
            dy = - dy;
        } else {

            // PERDER
            alert('PERDISTE !');
            document.location.reload();
        }
    }

    // VERIFICAR SUELO
    if (y + dy > game_zone.height - ballRadius || y + dy < ballRadius) {
        dy = - dy;
    }

    // Move Ball
    x += dx;
    y += dy;
}

setInterval(MAIN, 10);
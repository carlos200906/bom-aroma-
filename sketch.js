// Variável que representa o quanto a transição está avançada (0 = só campo, 1 = só cidade)
let progress = 0;

// Velocidade da transição. Quanto maior, mais rápido muda de campo para cidade
let speed = 0.001;

function setup() {
  // Cria uma tela de 800 pixels de largura e 400 de altura
  createCanvas(800, 400);
}

function draw() {
  // Muda a cor do céu do azul (campo) para cinza (cidade) conforme o progresso
  background(lerpColor(color(135, 206, 235), color(100, 100, 100), progress));

  // Chama as funções que desenham os elementos da cena
  drawSun();       // Desenha o sol e faz ele se mover
  drawMountains(); // Desenha montanhas que escurecem
  drawTrees();     // Desenha árvores que desaparecem
  drawBuildings(); // Desenha prédios que aparecem gradualmente
  drawGround();    // Muda o chão de verde para cinza
  drawPeople();    // Mostra pessoas surgindo na cidade

  // Aumenta a variável progress aos poucos (de 0 até 1), para fazer a transição acontecer
  if (progress < 1) {
    progress += speed;
  }
}

  .001

function setup() {
  createCanvas(800, 400);
}

function draw() {
  // Céu: do azul (campo) ao cinza (cidade)
  background(lerpColor(color(135, 206, 235), color(100, 100, 100), progress));

  drawSun();
  drawMountains();
  drawTrees();
  drawBuildings();
  drawGround();

  // Atualiza progressivamente até 1
  if (progress < 1) {
    progress += speed;
  }
}
function drawSun() {
  let sunX = lerp(100, width - 100, progress); // Se move para a direita
  let sunY = lerp(100, 80, progress); // Sobe levemente
  let sunColor = lerpColor(color(255, 204, 0), color(200, 200, 200), progress); // De amarelo a cinza claro
  fill(sunColor);
  noStroke();
  ellipse(sunX, sunY, 60);
}
function drawMountains() {
  let mountainColor = lerpColor(color(100, 155, 100), color(80, 80, 80), progress);
  fill(mountainColor);
  noStroke();
  triangle(100, 300, 200, 150, 300, 300);
  triangle(300, 300, 400, 170, 500, 300);
}
function drawTrees() {
  for (let x = 50; x < 550; x += 100) {
    let treeHeight = lerp(80, 0, progress); // Ficam menores
    let green = lerpColor(color(34, 139, 34), color(60, 60, 60), progress); // Ficam cinzas
    fill(139, 69, 19, 255 * (1 - progress)); // Tronco com opacidade
    rect(x, 300, 20, 50 * (1 - progress));
    fill(green);
    ellipse(x + 10, 300 - treeHeight / 2, 50, treeHeight);
  }
}
function drawBuildings() {
  if (progress > 0.2) {
    let opacity = map(progress, 0.2, 1, 0, 255); // Opacidade aumenta
    fill(80, 80, 80, opacity);
    rect(600, 250, 80, 150);
    rect(700, 200, 60, 200);
    rect(650, 270, 50, 130);

    // Janelas
    fill(255, 255, 0, opacity * 0.7);
    for (let y = 260; y < 380; y += 30) {
      rect(610, y, 15, 15);
      rect(690, y - 20, 15, 15);
    }
  }
}
function drawGround() {
  let groundColor = lerpColor(color(50, 200, 70), color(60, 60, 60), progress);
  fill(groundColor);
  noStroke();
  rect(0, 350, width, 50);
}
function drawBuildings() {
  if (progress > 0.2) {
    let opacity = map(progress, 0.2, 1, 0, 255); // Os prédios aparecem aos poucos

    // Cria vários prédios com diferentes tamanhos
    for (let x = 550; x < width; x += 40) {
      let buildingHeight = random(100, 200); // Altura aleatória
      fill(80, 80, 80, opacity);
      rect(x, height - buildingHeight - 50, 35, buildingHeight);

      // Janelas
      fill(255, 255, 100, opacity * 0.7); // Amarelo claro com transparência
      for (let wy = height - buildingHeight - 40; wy < height - 60; wy += 25) {
        for (let wx = x + 5; wx < x + 30; wx += 15) {
          rect(wx, wy, 8, 10);
        }
      }
    }
  }
}
function drawPeople() {
  if (progress > 0.4) {
    let opacity = map(progress, 0.4, 1, 0, 255);

    for (let i = 0; i < 5; i++) {
      let x = 580 + i * 40;
      let y = 340;

      // Corpo
      stroke(0, opacity);
      strokeWeight(2);
      line(x, y, x, y - 20); // Tronco
      line(x, y - 20, x - 5, y - 30); // Braço esquerdo
      line(x, y - 20, x + 5, y - 30); // Braço direito
      line(x, y, x - 5, y + 10); // Perna esquerda
      line(x, y, x + 5, y + 10); // Perna direita

      // Cabeça
      noStroke();
      fill(255, 224, 189, opacity); // Cor de pele
      ellipse(x, y - 25, 10, 10);
    }
  }
}
function draw() {
  background(lerpColor(color(135, 206, 235), color(100, 100, 100), progress));

  drawSun();
  drawMountains();
  drawTrees();
  drawBuildings();
  drawGround();
  drawPeople(); // <= Adicione aqui!

  if (progress < 1) {
    progress += speed;
  }
}

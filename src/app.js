import "bootstrap";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let contador = 0;
let contadorCPU = 0;
let finalResult = 0;
let cpuResult = 0;

const sumFinalResult = document.createElement('p')
sumFinalResult.innerText = ''
sumFinalResult.classList.add('sumResult');

const sumFinalCPU = document.createElement('p')
sumFinalCPU.innerText = ''
sumFinalCPU.classList.add('sumResult');

const resultTitle = document.createElement('h1');
resultTitle.classList.add('resultTitle');
resultTitle.innerText = '';
document.body.appendChild(resultTitle);

//--------------------BOTONES----------------------------------------

const container = document.createElement('div');
container.id = 'container_1';
document.body.appendChild(container);

const cpuContainer = document.createElement('div');
cpuContainer.id = 'container_2';
document.body.append(cpuContainer);

const scoreContainer = document.createElement('div');
scoreContainer.id = 'scoreContainer';
document.body.prepend(scoreContainer);

sumFinalResult.innerText = 'Tu Suma: 0';
sumFinalCPU.innerText = 'CPU: ???';

scoreContainer.appendChild(sumFinalResult);
scoreContainer.appendChild(sumFinalCPU);

const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttonContainer';
document.body.appendChild(buttonContainer);

const btnCardFirst = document.createElement('button');
btnCardFirst.innerText = 'Generar Una Sola Carta Random';
btnCardFirst.classList.add('buttonGenerator');
buttonContainer.appendChild(btnCardFirst);

const btnCardTwo = document.createElement('button');
btnCardTwo.innerText = 'Generar Más De Una Carta Aleatoria';
btnCardTwo.classList.add('buttonGenerator', 'hidden');
buttonContainer.appendChild(btnCardTwo);

const btnCPU = document.createElement('button');
btnCPU.innerText = 'Jugar Black Jack';
btnCPU.classList.add('buttonGenerator');
buttonContainer.appendChild(btnCPU);

const btnFinishGame = document.createElement('button');
btnFinishGame.innerText = 'Me Quiero Plantar';
btnFinishGame.classList.add('buttonGenerator', 'hidden');
buttonContainer.appendChild(btnFinishGame);

//-------------------------------------------------------------------

//--------------------CARTAS----------------------------------------
const randomNumber = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const createCard = () => {
  const card = document.createElement('div');
  card.id = 'card';

  const number = document.createElement('div');
  const pal1 = document.createElement('div');
  const pal2 = document.createElement('div');

  number.classList.add('numberOfCard');
  pal1.classList.add('palOfCardTop');
  pal2.classList.add('palOfCardBottom');

  const valor = randomNumber(num);
  const palos_ = randomNumber(palos);

  number.innerHTML = `<span>${valor}</span>`;
  pal1.innerHTML = `<span>${palos_}</span>`;
  pal2.innerHTML = pal1.innerHTML;

  if (pal1.textContent === '♥' || pal1.textContent === '♦') {
    pal1.classList.add('red');
    pal2.classList.add('red');
    number.classList.add('red');
  } else {
    pal1.classList.add('black');
    pal2.classList.add('black');
    number.classList.add('black');
  }

  card.appendChild(number);
  card.appendChild(pal1);
  card.appendChild(pal2);

  console.log(`El numero es ${number.textContent}, y el palo es ${pal1.textContent}`);

  card.dataset.valor = valor;
  return { card, valor };
};

//-------------------------------------------------------------------

//--------------------EVENT LISTENER----------------------------------------

btnCardFirst.addEventListener('click', () => {
  container.innerHTML = '';
  btnCardFirst.innerText = 'Generar Una Sola Carta Random';
  btnCardTwo.classList.add('hidden');
  contador = 1;
  contadorCPU = 0;
  finalResult = 0;
  cpuResult = 0;
  const { card, valor } = createCard();
  container.appendChild(card);
  finalResult += valor;
  btnCPU.classList.remove('hidden');
  btnFinishGame.classList.add('hidden')
  resultTitle.innerText = '';
  resultTitle.classList.add('hidden');
  sumFinalResult.innerText = `Tu Suma: ${finalResult}`;
  sumFinalCPU.innerText = 'El valor de cartas de tu rival es: ???';
});

btnCardTwo.addEventListener('click', () => {
  if (contador < 4) {
    const { card, valor } = createCard();
    container.appendChild(card);
    contador++;
    finalResult += valor;
    sumFinalResult.innerText = `Tu Suma: ${finalResult}`;
    btnCardFirst.innerText = 'Reiniciar';
  } else {
    alert('⚠️ Solo puedes tener 4 cartas.');
  }
  console.log('El valor actual del jugador principal es --> ' + finalResult);
});

btnCPU.addEventListener('click', () => {
  if (contadorCPU === 0) {
    let aux = Math.floor(Math.random() * 22);
    while (aux < 17) {
      aux = Math.floor(Math.random() * 22);
    }
    contadorCPU = 1;
    cpuResult = aux;
    sumFinalCPU.innerText = 'El valor de cartas de tu rival es: ???';
    console.log('El valor total de la CPU es --> ' + cpuResult);

    btnCardFirst.innerText = 'Reiniciar';
    btnCardTwo.classList.remove('hidden');
    btnFinishGame.classList.remove('hidden');
    btnCPU.classList.add('hidden');
  } else {
    alert('Solo se puede jugar una mano, termina esta ronda');
  }
});

btnFinishGame.addEventListener('click', () => {
  if (finalResult > 21 && cpuResult > 21) {
    resultTitle.innerText = '¡HABÉIS PERDIDO LOS DOS!';
  } else if (finalResult > 21) {
    resultTitle.innerText = '¡PERDISTE!';
  } else if (cpuResult > 21) {
    resultTitle.innerText = '¡GANASTE!';
  } else {
    if (finalResult > cpuResult) {
      resultTitle.innerText = '¡GANASTE!';
    } else if (finalResult === cpuResult) {
      resultTitle.innerText = 'EMPATE!';
    } else {
      resultTitle.innerText = '¡PERDISTE!';
    }
  }
  resultTitle.classList.remove('hidden')
  sumFinalCPU.innerText = `El valor de cartas de tu rival es: ${cpuResult}`
});
//-------------------------------------------------------------------

window.onload = function () {
  const { card, valor } = createCard();
  contador = 1;
  finalResult += valor;
  contadorCPU = 0;
  container.appendChild(card);
  sumFinalResult.innerText = `Tu Suma: ${finalResult}`;
};
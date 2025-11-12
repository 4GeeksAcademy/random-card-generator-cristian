import "bootstrap";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let contador = 0;
let contadorCPU = 0;
let finalResult = 0;

const sumFinalResult = document.createElement('p')
sumFinalResult.innerText = ''
sumFinalResult.classList.add('sumResult');

//--------------------BOTONES----------------------------------------

const container = document.createElement('div');
container.id = 'container_1';
document.body.appendChild(container);

const cpuContainer = document.createElement('div');
cpuContainer.id = 'container_2';
document.body.append(cpuContainer);

const btnCardFirst = document.createElement('button');
btnCardFirst.innerText = 'Generar Una Sola Carta Random';
btnCardFirst.classList.add('buttonGenerator');
document.body.appendChild(btnCardFirst);

const btnCardTwo = document.createElement('button');
btnCardTwo.innerText = 'Generar Más De Una Carta Aleatoria';
btnCardTwo.classList.add('buttonGenerator');
document.body.appendChild(btnCardTwo);

const btnCPU = document.createElement('button');
btnCPU.innerText = 'Valor de Cartas CPU';
btnCPU.classList.add('buttonGenerator');
document.body.appendChild(btnCPU);

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
  contador = 1;
  contadorCPU = 0;
  finalResult = 0;
  const { card, valor } = createCard();
  container.appendChild(card);
  finalResult += valor;
  document.body.removeChild(sumFinalResult);
});

btnCardTwo.addEventListener('click', () => {
  if (contador < 4) {
    const { card, valor } = createCard();
    container.appendChild(card);
    contador++;
    finalResult += valor;
    sumFinalResult.innerText = `Suma: ${finalResult}`;
    document.body.appendChild(sumFinalResult)
    console.log('El valor actual del jugador principal es --> ' + finalResult);
  } else {
    alert('⚠️ Solo puedes tener 4 cartas.');
  }
});

btnCPU.addEventListener('click', () => {
  if (contadorCPU === 0) {
    let aux = Math.floor(Math.random() * 22);
    while (aux < 13) {
      aux = Math.floor(Math.random() * 22);
    }
    contadorCPU = 1;
    console.log('El valor total de la CPU es --> ' + aux);
  }else{
    alert('Solo se puede jugar una mano, termina esta ronda')
  }

});

//-------------------------------------------------------------------

window.onload = function () {
  const { card, valor } = createCard();
  contador = 1;
  contadorCPU = 0;
  container.appendChild(card);
};

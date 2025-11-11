import "bootstrap";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let contador = 0;
let finalResult = 0;

const container = document.createElement('div')
container.id = 'container_1'
document.body.appendChild(container);

const cpuContainer = document.createElement('div')
cpuContainer.id = 'container_2'
document.body.append(cpuContainer);

const btnCardFirst = document.createElement('button')
btnCardFirst.innerText = 'Generate Random Card'
btnCardFirst.classList.add(`buttonGenerator`)
document.body.appendChild(btnCardFirst);

const btnCardTwo = document.createElement('button')
btnCardTwo.innerText = 'Generar Otra Carta Aleatoria'
btnCardTwo.classList.add('buttonGenerator')
document.body.appendChild(btnCardTwo)

const btnCPU = document.createElement('button');
btnCPU.innerText = 'Valor de Cartas CPU';
btnCPU.classList.add('buttonGenerator');
document.body.appendChild(btnCPU);

const randomNumber = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const createCard = () => {
  const card = document.createElement('div');
  card.id = 'card'

  const number = document.createElement('div')
  const pal1 = document.createElement('div')
  const pal2 = document.createElement('div')

  number.classList.add('numberOfCard')
  pal1.classList.add('palOfCardTop')
  pal2.classList.add('palOfCardBottom')

  const valor = randomNumber(num);
  const paloss = randomNumber(palos);

  number.innerHTML = `<span>${num}</span>`
  pal1.innerHTML = `<span>${paloss}</span>`
  pal2.innerHTML = pal1.innerHTML;

  pal1.className = 'palOfCardTop';
  pal2.className = 'palOfCardBottom';
  number.className = 'numberOfCard'

  if (pal1.textContent === `♥` || pal1.textContent === `♦`) {
    pal1.classList.add('red');
    pal2.classList.add('red');
    number.classList.add('red');
  } else {
    pal1.classList.add(`black`);
    pal2.classList.add(`black`);
    number.classList.add('black')
  }
  card.appendChild(number);
  card.appendChild(pal1);
  card.appendChild(pal2);
  
  console.log(`El numero es ${number.textContent}, y el palo es ${pal1.textContent}`)
  card.dataset.valor = valor;
  return card;
}

btnCardFirst.addEventListener('click', () => {
  container.innerHTML = '';
  contador = 1;
  finalResult = 
  container.appendChild(createCard());
  //console.log(contador);
})

btnCardTwo.addEventListener('click', () =>{
  if(contador < 4){
    container.appendChild(createCard());
    contador++;
    finalResult += parseInt(card.dataset.valor);
    console.log('El valor actual del jugador principal es --> ' + finalResult);
  }else{
    alert('⚠️ Solo puedes tener 4 cartas.')
  }
  //console.log(contador);
})

btnCPU.addEventListener('click', () =>{
  let aux = Math.floor(Math.random() * 22);
  while(aux < 13){
    aux = Math.floor(Math.random() * 22);
  }
  //console.log(aux);
})

window.onload = function () {
  container.appendChild(createCard());
};

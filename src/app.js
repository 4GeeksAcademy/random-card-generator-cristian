import "bootstrap";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let contador = 0;

const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container);

const btnCardFirst = document.createElement('button')
btnCardFirst.innerText = 'Generate Random Card'
btnCardFirst.classList.add(`buttonGenerator`)
document.body.appendChild(btnCardFirst);

const btnCardTwo = document.createElement('button')
btnCardTwo.innerText = 'Generar Otra Carta Aleatoria'
btnCardTwo.classList.add('buttonGenerator')
document.body.appendChild(btnCardTwo)

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

  number.innerHTML = `<span>${randomNumber(num)}</span>`
  pal1.innerHTML = `<span>${randomNumber(palos)}</span>`
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

  return card;
}

btnCardFirst.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(createCard());
})

btnCardTwo.addEventListener('click', () =>{
  contador++
  if(contador < 1){
    container.appendChild(createCard());
  }
  if(contador >= 1){
    container.appendChild(createCard());
  }
})

window.onload = function () {
  container.appendChild(createCard());
};

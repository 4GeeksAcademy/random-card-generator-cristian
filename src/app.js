import "bootstrap";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♦', '♥', '♠', '♣'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const card = document.createElement('div');
const number = document.createElement('div')
const pal1 = document.createElement('div')
const pal2 = document.createElement('div')

const btn = document.createElement('button')
btn.innerText = `Generate Random Card`
btn.classList.add(`buttonGenerator`)

number.classList.add('numberOfCard')
pal1.classList.add('palOfCardTop')
pal2.classList.add('palOfCardBottom')
card.id = 'card';

const randomNumber = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const randomCard = () => {
  number.innerHTML = `<span>${randomNumber(num)}</span>`
  pal1.innerHTML = `<span>${randomNumber(palos)}</span>`
  pal2.innerHTML = pal1.innerHTML;

  pal1.className = 'palOfCardTop';
  pal2.className = 'palOfCardBottom';

  if (pal1.textContent === `♥` || pal1.textContent === `♦`) {
    pal1.classList.add(`red`);
    pal2.classList.add(`red`);
  } else {
    pal1.classList.add(`black`);
    pal2.classList.add(`black`);
  }
  card.appendChild(number);
  card.appendChild(pal1);
  card.appendChild(pal2);
  document.body.appendChild(card);
  document.body.appendChild(btn);

  console.log(`El numero es ${number.textContent}, y el palo es ${pal1.textContent}`)
}

btn.addEventListener('click', () =>{
  randomCard();
})


window.onload = function () {
  randomCard();
};

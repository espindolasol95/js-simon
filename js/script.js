// vado a recuperare gli elementi del DOM che mi servono 

const countdownElement= document.getElementById('countdown');
const numberList = document.getElementById('numbers-list');
const instructions= document.getElementById ('instructions');
const form= document.getElementById ('answers-form');
const message = document.getElementById('message');
const inputs= document.querySelectorAll ('input');
const button= document.querySelector ('button');

const totalNumbers= 5; // numeri che vogliamo che siano mostrati
const countdownSeconds= 30; //durata del timer (30 secondi)
let generateNumbers = []; //array per salvare i numeri generati random

// generatore di numeri random
const generateRandomNumbers=( min, max) =>{
    const random= [];
    while(random.length < 5){
      const number = Math.floor(Math.random()*(max - min +1)) +min;
      //verifico se l'array random ha il numero se non ce l'ha, lo inserisco
      if(random.includes (number)===false){
        //inserisco numero generato nel array
        random.push (number)
      }
    }

 return random;

}


//funzione per mostrare  i numeri in pagina
 const numbers = generateRandomNumbers (1,30);

 //devo mostrare i numeri a video 
 //ciclo l'array numbers
 for (let i=0; i<numbers.length; i++){
  numberList.innerHTML += `<li class="list-item">${numbers[i]}</li>`;
 }
  let time = countdownSeconds;
  //mostro il valore dentro l'elemento countdown
  countdownElement.innerText = time;
  //vado a definire il set interval che mi scala i secondi e 
  // mi nasconde i numeri per farmi aparire le form 
  const countdown = setInterval(()=>{
    time --,
    countdownElement.innerText=time;

    if(time===0){
      clearInterval(countdown);

      form.classList.remove('d-none');
      numberList.classList.add('d-none');
      instructions.innerHTML= 'Digita i numeri che ricordi e visualiza il risultato'
    }


  },1000);

  //definisco la funzio che al click del pulsante mi recupera
  //i numeri che l'utente ha inserito e controla quali sono presente
  //nel array di quelli generate casulmente

  const confirm= (e)=> {
    e.preventDefault();
  }


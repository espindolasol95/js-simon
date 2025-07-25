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

  //definisco la funzione che al click del pulsante mi recupera
  //i numeri che l'utente ha inserito e controlla quali sono presente
  //nel array di queli generate casulmente

  const confirm= (e)=> {
    
    const userNumbers = [];
    const correctAnswers = [];
    for(let i=0; i<inputs.length; i++ ){
      userNumbers.push(parseInt(inputs[i].value));

    }
    for(let i=0; i<userNumbers.length; i++){
      if(numbers.includes(userNumbers[i])){
        correctAnswers.push(userNumbers[i]);
      }
    }
    //mostriamo il messaggio all'utente
    message.classList.remove('text-danger');
    message.classList.add('text-success');

    message.innerText =  `hai indovinato  ${correctAnswers.length} (${correctAnswers}) ` ;


  }
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    confirm();
  });
  
    
// vado a recuperare gli elementi del DOM che mi servono 

const countdown= document.getElementById('countdown');
const numberList= document.getElementById('number-list');
const instructions= document.getElementById ('instructions');
const form= document .getElementById ('answers-form');
const messagge=document.getElementById('messagge');
const inputs= document.querySelectorAll ('input');
const button= document.querySelector ('button');

const totalNumbers= 5; // numeri che vogliamo che siano mostrati
const countdownSeconds= 30; //durata del timer (30 secondi)
let generateNumbers = []; //array per salvare i numeri generati random

// generatore di numeri random
const generateRandomNumbers=( min, max=) =>{
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
 
    
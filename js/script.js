// vado a recuperare gli elementi del DOM che mi servono 

const countdown= document.getElementById('countdown');
const numberList= document.getElementById('number-list');
const instructions= document.getElementById ('instructions');
const answersForm= document .getElementById ('answersForm');
const messagge=document.getElementById('messagge');
const inputGroup= document.getElementById ('inputGroup');

const totalNumbers= 5; // numeri che vogliamo che siano mostrati
const countdownSeconds= 30; //durata del timer (30 secondi)
let generateNumbers = []; //array per salvare i numeri generati random

// generatore di numeri random
function generateRandomNumbers(total , min = 1, max=50){
    const range= [];
    for (let i = min; i <= max; i ++){
        range.push (i);
    }
}    


    for (let i = range.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // numero casiali da 0 a i 
      [range[i], range[j]] = [range[j], range[i]]; // scambio i due valori 
    }
     //estituire il risultato finale della funzione cioè un array con N numeri casuali unici
    return range.slice (0,total); 


    
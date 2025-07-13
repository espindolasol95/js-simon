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
    


for (let i = range.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // numero casiali da 0 a i 
      [range[i], range[j]] = [range[j], range[i]]; // scambio i due valori 
    }
     //estituire il risultato finale della funzione cioè un array con N numeri casuali unici
    return range.slice (0,total); 
}

//funzione per mostrare  i numeri in pagina


function showNumbers (numbers){
    numberList.innerHTML=''; //svuoto la lista prima di inserire nuovi elementi

}
 //per ogni numero creo un <li> e lo aggiungo alla lista
 for (let i= 0; i <numbers.length; i++){
 const li = document. createElement('li'); //creo un li
 li.textContent = numbers [i]; //metto il numero dentro
 numberList.appendChild(li); // lo aggiungo alla lista

 }
 
 //funzione per il countdown di 30 sec
 //(per questa  parte ho cercaro il come farla su internet e ho fatto passo a passo non e stata 100% di mio
 // in piu ho cancelato tutto e sistemato le parentesi graffa. e piccoli errori)

 let secondsLeft = countdownSeconds; //contatore che parte da 30

 countdown.textContent = secondsLeft

const timer = setInterval(() => {
    secondsLeft--; // ogni secondo diminuisce
    countdown.textContent = secondsLeft; // aggiorno il numero mostrato

    // Dopo 10 secondi, nascondo i numeri e mostro gli input
    if (secondsLeft === countdownSeconds - 10) {
      numbersList.innerHTML = ''; // nascondo i numeri
      instructions.textContent = 'Inserisci i numeri che ricordi:';
      answersForm.classList.remove('d-none'); // faccio comparire il form
    }

    // Quando finisce il tempo
    if (secondsLeft <= 0) {
      clearInterval(timer); // fermo il countdown
      countdown.textContent = 'Tempo scaduto!';
      instructions.textContent = 'Inserisci i numeri che ricordi e premi Conferma.';
    }
}, 1000); // ogni 1000 millisecondi (1 secondo)



/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//* Chiedo una parola all'utente
const wordToCheck = prompt('Inserisci una parola da controllare', 'anna').trim().toLowerCase();


//* Creo funzione che crea una parola al contrario e guarda se è palindroma
function isPalindrome(word) {
  console.log('Parola inserita: ', word);
  console.log(word.length);
  let reversedWord = '';    // Creo variabile per la parola al contrario
  for (let i = word.length - 1; i >= 0; i--) {    // Compongo la parola data al contrario
    reversedWord += word.charAt(i); // Aggiungo alla variabile vuota ogni singola lettera partendo dalla fine
  }
  console.log('Parola al contrario: ', reversedWord); // Mostro la parola al contrario
  if (word === reversedWord) {
    return `${word} è palindroma`;
  } else {
    return `${word} (${reversedWord} al contrario) non è palindroma`;
  }
}

const resultPalindrome = isPalindrome(wordToCheck);
console.log(resultPalindrome);



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Chiedo all'utente se vuole pari o dispari e un numero da 1 a 6
const userChoice = prompt('Pari o Dispari?', 'pari').trim().toLowerCase();
const userChoiceNumber = parseInt(prompt('Scegli un numero da 1 a 6', '3'));

function game(choice, number){
  let cpuNumber = Math.floor(Math.random() * 6) +1;
  let cpuChoice;
  let sum = cpuNumber + number;
  let result;

  console.log('User Number: ', number);
  console.log('CPU Number: ', cpuNumber);
  console.log('SUM: ', sum);

  // Se l'utente ha scelto pari, l'avversario sceglierà dispari e viceversa
  choice === 'pari' ? cpuChoice = 'dispari' : cpuChoice = 'pari';
  
  console.log('CPU Choice: ', cpuChoice)

  // Si guarda se la somma dei due numeri sia pari o dispari
  sum % 2 === 0 ? result = 'pari' : result = 'dispari';

  // Si confronta la scelta del giocatore con il risultato del pari o dispari
  //* Se result è uguale a choice allora primo risultato, se no secondo risultato
  return result === choice ? `Hai scelto ${choice}, ${sum} è la somma, hai Vinto!` : `Hai scelto ${choice}, ${sum} è la somma, hai Perso`;
}

const resultGame = game(userChoice, userChoiceNumber);
console.log(resultGame);
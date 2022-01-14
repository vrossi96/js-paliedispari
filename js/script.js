/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


//* Chiedo una parola all'utente
const wordToCheck = prompt('Inserisci una parola da controllare').trim().toLowerCase();


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
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// Dichiaro una variabile con la mia lista di cognomi
var surnameList = ["Rossi", "Vitale", "Canino", "Lillo", "Campagnola", "Vozza", "Alois", "Morelli"];
console.log(surnameList);
// Chiedo all'utente di inserire il proprio cognome e lo inserisco nella lista
var surnameUser = prompt("Type here your surname");
surnameList.push(surnameUser);

// Check del nuovo array
console.log(surnameList);

// Ordino gli elementi della nuova lista in ordine alfabetico
surnameList.sort();

// Check del nuovo array
console.log(surnameList);

// Indico la posizione dell'utente nella lista con una nuova variabile
var userIndex = (surnameList.indexOf(surnameUser) + 1);

// Stampo la lista ordinata alfabeticamente
document.getElementById('output').innerHTML = " <li> " + surnameList + " </li> " + "<br>" + " <li> " + "La posizione dell'utente all'interno della lista è: " + userIndex + " </li> ";

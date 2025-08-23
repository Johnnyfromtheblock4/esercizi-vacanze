/*
  Crea un form che permetta all’utente di inserire un messaggio di auguri. 
  Ogni volta che preme “Aggiungi Augurio”, il messaggio viene aggiunto a una lista visualizzata nel DOM.
*/

// array per memorizzare i messaggi di auguri
const auguri = [];

// funzione per aggiornare la lista nel DOM
function renderAuguri() {
  const listaAuguri = document.getElementById("listaAuguri");

  // elimino la lista attuale
  listaAuguri.innerHTML = "";

  // aggiungo ogni messaggio come elemento <li>
  auguri.forEach((messaggio) => {
    const li = document.createElement("li");
    li.textContent = messaggio;
    listaAuguri.appendChild(li);
  });
}

// gestisco il clic sul pulsante "Aggiungi Augurio"
document.getElementById("aggiungiAugurio").addEventListener("click", () => {
  const input = document.getElementById("messaggioAuguri");
  const messaggio = input.value.trim();

  // controllo che il messaggio non sia vuoto
  if (messaggio) {
    // aggiungo il messaggio all'array
    auguri.push(messaggio);
    // aggiorno la lista nel DOM
    renderAuguri();
    // pulisco l'input
    input.value = "";
  }
});

// invoco la funzione
renderAuguri();
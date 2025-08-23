/*
  Base.
  Mostra in pagina un elenco di desideri presi da un array. 
  
  Bonus.
  Aggiungi un pulsante accanto a ogni desiderio per eliminarlo dalla lista.
*/

// array dei desideri
const desideri = [
  "Un trenino",
  "Un Cicibubu portatile",
  "Un bonifico",
  "Un cane",
];

// seleziono l'UL
const lista = document.getElementById("desideri");

// funzione per renderizzare la lista
function renderLista() {
  // vuota la lista prima di ricostruirla
  lista.innerHTML = "";

  desideri.forEach((desiderio, index) => {
    const li = document.createElement("li");
    li.textContent = desiderio;

    // creo il bottone elimina
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // al click rimuove il desiderio dall'array e ri-renderizza
    deleteBtn.addEventListener("click", () => {
      desideri.splice(index, 1);
      renderLista();
    });

    li.appendChild(deleteBtn);
    lista.appendChild(li);
  });
}

// invoco la funzione
renderLista();
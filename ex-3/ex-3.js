const acquisti = [
  { nome: "Telo mare deluxe", prezzo: 56 },
  { nome: "Cappellino", prezzo: 5 },
  { nome: "Ombrellone", prezzo: 25 },
  { nome: "Infradito", prezzo: 15 },
  { nome: "Borsa frigo costosa", prezzo: 58 },
];

// Dato un array di acquisti estivi, restituisci solo quelli che costano meno di 20 euro.
const acquistiEconomici = acquisti.filter((item) => item.prezzo < 20);
console.log(acquistiEconomici);

// Crea una funzione "filtraAcquistiEconomici", che dato un array, restituisca quelli che costano meno di 20 euro
function filtraAcquistiEconomici(array) {
  return array.filter((item) => item.prezzo < 20);
}

const risultato = filtraAcquistiEconomici(acquisti);
console.log(risultato);

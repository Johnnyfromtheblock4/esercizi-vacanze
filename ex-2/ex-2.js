const acquisti = [
  { nome: "Gonfiabile", prezzo: 15 },
  { nome: "Crema solare", prezzo: 10 },
  { nome: "Racchettoni", prezzo: 20 },
];
//
const prezzi = acquisti.map((item) => item.prezzo);
console.log(prezzi);

function somma(array) {
  return array.reduce((totale, valore) => totale + valore, 0);
}

const totalePrezzi = somma(prezzi);
console.log(totalePrezzi); 

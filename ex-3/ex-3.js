const acquisti = [
  { nome: "Telo mare deluxe", prezzo: 56 },
  { nome: "Cappellino", prezzo: 5 },
  { nome: "Ombrellone", prezzo: 25 },
  { nome: "Infradito", prezzo: 15 },
  { nome: "Borsa frigo costosa", prezzo: 58 },
];

function filtraAcquistiEconomici(array) {
  return array.filter((item) => item.prezzo < 20);
}

console.log(filtraAcquistiEconomici(acquisti));

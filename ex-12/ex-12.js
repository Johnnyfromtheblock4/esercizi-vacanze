const attrezzatura = [
  { nome: "Gonfiabile", quantita: 10 },
  { nome: "Pallone", quantita: 8 },
  { nome: "Secchiello", quantita: 12 },
  { nome: "Ciuccibum Portatili", quantita: 7 },
];

function controllaAttrezzatura(array, minimo) {
  return array.every((item) => item.quantita >= minimo);
}

console.log(controllaAttrezzatura(attrezzatura, 5)); // true
console.log(controllaAttrezzatura(attrezzatura, 9)); // false

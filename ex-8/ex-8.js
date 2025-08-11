const località = [
  "Cocomeropoli",
  "Ghiacciolandia",
  "Gelatonia",
  "Spruzzolandia",
  "Bagnasciuga City",
  "CremaMarina",
  "SabbiaLido",
  "Ondallegra",
  "Frullaville",
  "Ombrellopoli",
];

function aggiungiLocalità(array, nuovaLocalità) {
  if (!array.includes(nuovaLocalità)) {
    array.push(nuovaLocalità);
  }
  return array;
}

console.log(aggiungiLocalità(località, "Cocomeropoli")); // non aggiunge perchè già presente
console.log(aggiungiLocalità(località, "Soleville")); // aggiunge Soleville

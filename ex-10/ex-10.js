const giorniEstate = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const giorniEstateIncompleto = [1, 2, 6, 7, 8, 9, 10, 18, 19, 20, 21, 22];

function programmaCompleto(giorni) {
  if (giorni.length !== 24) return false;
  return giorni.every((_, index) => giorni.includes(index + 1));
}

console.log(programmaCompleto(giorniEstate)); // true
console.log(programmaCompleto(giorniEstateIncompleto)); // false

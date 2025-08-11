const granite = [
  "limone",
  "fragola",
  "limone",
  "menta",
  "limone",
  "pesca",
  "fragola",
];

function contaGusti(granite) {
  const conteggio = {};
  granite.forEach((gusto) => {
    conteggio[gusto] = (conteggio[gusto] || 0) + 1;
  });
  return conteggio;
}

console.log(contaGusti(granite));

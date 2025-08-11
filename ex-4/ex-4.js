const granite = [
  "limone",
  "fragola",
  "limone",
  "menta",
  "limone",
  "pesca",
  "fragola",
];

function contaLimone(array) {
  return array.filter((gusto) => gusto === "limone").length;
}

console.log(contaLimone(granite));

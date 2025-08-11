const bagnini = [
  { nome: "Dobby", oreLavorate: 4 },
  { nome: "Ombrellino", oreLavorate: 6 },
  { nome: "Cicibubu", oreLavorate: 3 },
  { nome: "Buddy", oreLavorate: 8 },
  { nome: "SamBem", oreLavorate: 2 },
];

function trovaBagniniPigri(array) {
  return array.filter((bagnino) => bagnino.oreLavorate < 5);
}

console.log(trovaBagniniPigri(bagnini));

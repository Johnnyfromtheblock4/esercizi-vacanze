const bagnini = [
  { nome: "Dobby", oreLavorate: 4 },
  { nome: "Ombrellino", oreLavorate: 6 },
  { nome: "Cicibubu", oreLavorate: 3 },
  { nome: "Buddy", oreLavorate: 8 },
  { nome: "SamBem", oreLavorate: 2 },
];

function categorizzaBagnini(array) {
  return array.map((bagnino) => ({
    nome: bagnino.nome,
    oreLavorate: bagnino.oreLavorate,
    carattere: bagnino.oreLavorate < 5 ? "pigro" : "operoso",
  }));
}

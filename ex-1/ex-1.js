const names = [
  "Giovanni Gianni",
  "Bruno Barbieri",
  "Bagnino",
  "Ermenegildo Buffetti",
];

function trovaBagnino(namesArray) {
  return namesArray.find(function(persona) {
    return persona === "Bagnino";
  });
}

console.log(trovaBagnino(names));

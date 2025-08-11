const energieBambini = [12, 1, 7, 10, 16, 5];

function bambiniStanchi(array) {
  return array.some((energia) => energia < 10);
}

console.log(bambiniStanchi(energieBambini));

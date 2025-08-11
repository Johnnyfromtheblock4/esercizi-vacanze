const attività = ["racchettoni", "palla", "racchettoni", "tuffi"];

function generaListaAttività(array) {
  const viste = new Set();
  return array.filter((attività) => {
    if (!viste.has(attività)) {
      viste.add(attività);
      return true;
    }
    return false;
  });
}

console.log(generaListaAttività(attività));

const data = "2025-08-06";

function countdownFerragosto(dataInput) {
  const data = new Date(dataInput);
  const ferragosto = new Date(data.getFullYear(), 7, 15);
  
  // calcolo la differenza in millisecondi
  const differenzaMs = ferragosto - data;
  
  // converto in giorni
  const giorni = Math.ceil(differenzaMs / (1000 * 60 * 60 * 24));
  
  return giorni;
}

console.log(countdownFerragosto(data));
/*
  Crea un timer che mostra quanti giorni, ore, minuti e secondi mancano a Natale. 
  Aggiorna il valore ogni secondo. 
  Inietta i dati dinamicamente nel DOM.
*/

// funzione per calcolare il tempo rimanente fino a Ferragosto
function getTimeToFerragosto() {
    // data di Ferragosto del prossimo anno
    const now = new Date();
    const currentYear = now.getFullYear();
    let ferragosto = new Date(currentYear, 7, 15); // 7 è agosto (0-based)

    // se Ferragosto di quest'anno è passato
    if (now > ferragosto) {
        ferragosto = new Date(currentYear + 1, 7, 15);
    }

    // differenza in millisecondi
    const diff = ferragosto - now;

    // calcolo giorni, ore, minuti e secondi
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// funzione per aggiornare il countdown nel DOM
function updateCountdown() {
    const { days, hours, minutes, seconds } = getTimeToFerragosto();
    
    // inietto i dati nel DOM
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `
        ${days} giorni, 
        ${hours} ore, 
        ${minutes} minuti, 
        ${seconds} secondi
    `;
}

// aggiorno il countdown subito e poi ogni secondo
updateCountdown();
setInterval(updateCountdown, 1000);
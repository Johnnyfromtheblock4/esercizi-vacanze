async function getRandomQuotes() {
  try {
    for (let i = 1; i <= 10; i++) {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const quote = await response.json();
      console.log(`${i}. ${quote.quote} - ${quote.author}`);
    }
  } catch (error) {
    console.error("Errore nel recupero delle frasi:", error);
  }
}

getRandomQuotes();

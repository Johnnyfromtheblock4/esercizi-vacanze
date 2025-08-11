# Esercizi per le vacanze

# Esercizi JS (logica e sintassi)

## ESERCIZIO 1

/\*
Scrivi una funzione "trovaBagnino" che, dato un array di nomi,
restituisca "Bagnino trovato!" se il nome "Bagnino" è presente,
altrimenti "Bagnino non trovato".

Input: ["Giovanni Gianni", "Bruno Barbieri", "Bagnino", "Ermenegildo Buffetti"]
Output: "Bagnino trovato!";
\*/

const people = ["Giovanni Gianni", "Bruno Barbieri", "Bagnino", "Ermenegildo Buffetti"];

## ESERCIZIO 2

/\*
Dato un array di oggetti rappresentanti acquisti estivi e relativi prezzi,
scrivi una funzione "calcolaTotale" che calcoli il costo totale della spesa
(così vediamo quanto spende il nostro vacanziere ehhe)

Input:
const acquisti = [
{ nome: "Gonfiabile", prezzo: 15 },
{ nome: "Crema solare", prezzo: 10 },
{ nome: "Racchettoni", prezzo: 20 },
];

Output: 45
\*/

const acquisti = [
{ nome: "Gonfiabile", prezzo: 15 },
{ nome: "Crema solare", prezzo: 10 },
{ nome: "Racchettoni", prezzo: 20 }
];

## ESERCIZIO 3

/\*

1. Dato un array di acquisti estivi, restituisci solo quelli che costano meno di 20 euro.

Input:
const acquisti = [
{ nome: "Telo mare deluxe", prezzo: 56 },
{ nome: "Cappellino", prezzo: 5 },
{ nome: "Ombrellone", prezzo: 25 },
{ nome: "Infradito", prezzo: 15 },
{ nome: "Borsa frigo costosa", prezzo: 58 },
];

Output: [
{ nome: "Cappellino", prezzo: 5 },
{ nome: "Infradito", prezzo: 15 },
]

2. Crea una funzione "filtraAcquistiEconomici", che dato un array, restituisca quelli che costano meno di 20 euro
   \*/

const acquisti = [
{ nome: "Telo mare deluxe", prezzo: 56 },
{ nome: "Cappellino", prezzo: 5 },
{ nome: "Ombrellone", prezzo: 25 },
{ nome: "Infradito", prezzo: 15 },
{ nome: "Borsa frigo costosa", prezzo: 58 },
];

## ESERCIZIO 4

/\*
Hai un array con i gusti delle granite che hai bevuto al chiosco in spiaggia.
Scrivi una funzione "contaLimone" che conti quante granite al limone ci sono.

Input:
const granite = ["limone", "fragola", "limone", "menta", "limone", "pesca", "fragola"];

Output: 3
\*/

const granite = ["limone", "fragola", "limone", "menta", "limone", "pesca", "fragola"];

## ESERCIZIO 5

/\*
Hai un array con i gusti delle granite che hai bevuto al chiosco in spiaggia.
Conta quante granite ci sono per ogni gusto, restituisci un oggetto con il numero totale per ciascun tipo.

Input:
const granite = ["limone", "fragola", "limone", "menta", "limone", "pesca", "fragola"];

Output:
{
"limone": 3,
"fragola": 2,
"menta": 1,
"pesca": 1
}
\*/

const granite = ["limone", "fragola", "limone", "menta", "limone", "pesca", "fragola"];

## ESERCIZIO 6

// Alcuni bagnini dello stabilimento balneare sono meno attivi di altri.
// Il capo stabilimento vuole scoprire chi sono.
// Dato un array di bagnini e le relative ore lavorate, scrivi una funzione "trovaBagniniPigri"
// che restituisca solo i bagnini che hanno lavorato meno di 5 ore.

const bagnini = [
{ nome: "Dobby", oreLavorate: 4 },
{ nome: "Ombrellino", oreLavorate: 6 },
{ nome: "Cicibubu", oreLavorate: 3 },
{ nome: "Buddy", oreLavorate: 8 },
{ nome: "SamBem", oreLavorate: 2 }
];

## ESERCIZIO 7

// Ora vogliamo categorizzare ogni bagnino come "pigro" o "operoso".
// Dato l'array di bagnini e le rispettive ore lavorate, scrivi una funzione "categorizzaBagnini"
// che restituisce lo stesso array di oggetti, con la proprietà extra "carattere":
// - il suo valore sarà "pigro" se ha lavorato meno di 5 ore
// - il suo valore sarà "operoso" se ha lavorato 5 o più ore

const bagnini = [
{ nome: "Dobby", oreLavorate: 4 },
{ nome: "Ombrellino", oreLavorate: 6 },
{ nome: "Cicibubu", oreLavorate: 3 },
{ nome: "Buddy", oreLavorate: 8 },
{ nome: "SamBem", oreLavorate: 2 }
];

## ESERCIZIO 8

// Hai un array con le località estive da visitare.
// Scrivi una funzione "aggiungiLocalità" che aggiunga una località all’array solo se non è già presente.

const località = [
"Cocomeropoli",
"Ghiacciolandia",
"Gelatonia",
"Spruzzolandia",
"Bagnasciuga City",
"CremaMarina",
"SabbiaLido",
"Ondallegra",
"Frullaville",
"Ombrellopoli"
];

## ESERCIZIO 9

// Scrivi una funzione "bambiniStanchi" che, dato un array con le energie dei bambini in colonia,
// restituisca true se almeno un bambino ha energia inferiore a 10, altrimenti false.

const energieBambini = [12, 1, 7, 10, 16, 5];

## ESERCIZIO 10

// Scrivi una funzione "programmaCompleto" che controlli
// se un array con i giorni del programma estivo (1-24) è completo.
// Restituisci true se i giorni vanno da 1 a 24 senza mancare.

const giorniEstate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const giorniEstateIncompleto = [1, 2, 6, 7, 8, 9, 10, 18, 19, 20, 21, 22];

## ESERCIZIO 11

// Scrivi una funzione "generaListaAttività" che prenda un array con attività estive duplicate e
// restituisca una lista con le attività uniche.

const attività = ["racchettoni", "palla", "racchettoni", "tuffi"];
// Output atteso: ["racchettoni", "palla", "tuffi"]

## ESERCIZIO 12

// Scrivi una funzione "controllaAttrezzatura" che, dato un array di attrezzature da spiaggia
// e un numero minimo di pezzi richiesto, restituisca true se ci sono abbastanza pezzi per ogni tipo.

// Esempio:
const attrezzatura = [
{ nome: "Gonfiabile", quantita: 10 },
{ nome: "Pallone", quantita: 8 },
{ nome: "Secchiello", quantita: 12 },
{ nome: "Ciuccibum Portatili", quantita: 7 }
];

// Output:
// controllaAttrezzatura(attrezzatura, 5) -> true
// controllaAttrezzatura(attrezzatura, 9) -> false

## ESERCIZIO 13

// Quanto manca a Ferragosto?
// Hai una data. Scrivi una funzione "countdownFerragosto" che restituisca il numero di giorni che mancano al 15 agosto.

const data = "2025-08-06";
// Output atteso: 9

## ESERCIZIO 14

/\*
Sfruttano questa api, stampa in console sue 10 frasi.
Endpoint API: https://dummyjson.com/quotes

L'endpoint di default ti restituisce sempre 30 frasi uguali, leggi bene la documentazione per trovare l'endpoint giusto, che restituisce un tot di frasi random
Gran suggeimento: https://dummyjson.com/docs/quotes#quotes-random
\*/

# Esercizi HTML, CSS e JS

## ESERCIZIO 15

Partendo dal progetto nella cartella `ex-15`, crea un timer che mostra quanti giorni, ore, minuti e secondi mancano a Ferragosto (15 agosto). Aggiorna il valore ogni secondo. Inietta i dati dinamicamente nel DOM.

## ESERCIZIO 16

Partendo dal progetto nella cartella `ex-16`
/\*
Base.
Mostra in pagina un elenco di desideri presi da un array.
Output: (vedi esempio-base.png)

Bonus.
Aggiungi un pulsante accanto a ogni desiderio per eliminarlo dalla lista.
Output: (vedi esempio-bonus.png)
\*/

## ESERCIZIO 17

Partendo dal progetto nella cartella `ex-17`
/_
Crea un form che permetta all’utente di inserire un messaggio di auguri.
Ogni volta che preme “Aggiungi Augurio”, il messaggio viene aggiunto a una lista visualizzata nel DOM.
_/

## ESERCIZIO 18

Partendo dal progetto nella cartella `ex-18`
/_
Scrivi una funzione che generi un ombrellone in formato testo (con asterischi _)
in base a un input numerico dell’utente che rappresenta l’altezza dell’ombrellone.
Ogni volta che l’utente preme “Genera Ombrellone”, l’ombrellone viene mostrato nel DOM,
con la parte superiore a forma di piramide di asterischi e una piccola stanghetta come palo.

Output: (simile a una piramide con un palo singolo al centro sotto)
\*/

# Esercizi Express

## ESERCIZIO 19

Crea un'API Express con un singolo endpoint che restituisce una frase estiva casuale.

Prepara un array con almeno 5 frasi a tema estate.

Crea un endpoint GET /frase-estiva che risponde con una frase casuale dell’array.

Esempio di risposta JSON:
{
"frase": "bello il sole, ma javascript..."
}

## ESERCIZIO 20

2. CRUD Gelati 🍦
   Obiettivo:
   Crea un'app Express che gestisca un piccolo catalogo di gusti di gelato.
   I gelati vengono salvati sempre in una rray di oggetti statico.
   Ogni gelato ha: id, nome, prezzo.

Crea i seguenti endpoint:

- GET /gelati → restituisce tutti i gelati
- GET /gelati/:id → restituisce un solo gelato per ID
- POST /gelati → aggiunge un nuovo gelato (dati nel body)
- PUT /gelati/:id → modifica un gelato esistente
- DELETE /gelati/:id → rimuove un gelato

Esempio di gelato
{
"id": 1,
"gusto": "Coppa del nonno",
"prezzo": 2.5
}

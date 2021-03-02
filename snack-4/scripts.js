 // In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

 // 1. Lista nomi invitati
 var lista = ["mario", "pippo", "franco", "antonio", "daniele"];

 // 2.Richiesta nome utente
 var nomeUtente = prompt("Inserisci il tuo nome.");
 nomeUtente = nomeUtente.toLowerCase();

 // 3. Creazione variabile booleana
 var partecipazione = false;

 // 4. Controllo sulla lista degli invitati
 for (var i = 0; i < lista.length; i++) {
   if ( nomeUtente == lista[i]) {
     partecipazione = true;
   }
 }

// 5. Controllo finale partecipazione
if ( partecipazione == true) {
  console.log("Puoi partecipare.")
} else {
  console.log("Non puoi partecipare.")
}

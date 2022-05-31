/*  Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

// 1- RACCOLTA DATI PER L'UTENTE
// nome utente
const userName = prompt('Dimmi il tuo nome');

// cognome utente
const userLastname = prompt('Dimmi il tuo cognome');

// colore preferito utente
const userFavColor = prompt('Dimmi il tuo colore preferito');

// 2- OUTPUT FINALE PER L'UTENTE
// messaggio finale per l'utente
const userMessage = 'La tua password è ' + userName + userLastname + userFavColor + '21';

// stampiamo
document.getElementById('result').innerHTML = userMessage;
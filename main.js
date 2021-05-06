/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}
//numero massimo del numero casuale stabilito dall'utente
var numeroMax = Number(prompt('inserisci il numero massimo casuale'));
// creo array con 5 numeri casuali e li stampo in un allert()
var arrayNumeri = [];
var numero;
while (arrayNumeri.length < 5) {
    numero = randomNumber(1, numeroMax);
    if (!arrayNumeri.includes(numero)) {
        arrayNumeri.push(numero);
    } 
}
alert('Ricorda questi numeri: ' + arrayNumeri);
//Da li parte un timer di 30 secondi.
var timer = 0;
var secondiTimer = setInterval(function () {
    timer++;
    console.log(timer);
    if (timer === 30) {
        clearInterval(secondiTimer);
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        var arrayUtente = [];
        var numeroUtente;
        for (var i = 0; i < 5; i++) {
            numeroUtente = Number(prompt('inserisci un numero che ti ricordi'));
            arrayUtente.push(numeroUtente);
        }
        //creo array e pusho i numeri scelti dall'utente
        
        console.log('numeri utente ' + arrayUtente);
        console.log('numeri da indovinare ' + arrayNumeri);

        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
        var numeriCorretti = intersect(arrayUtente, arrayNumeri);
        console.log('hai indovintao ' + numeriCorretti.length + ' numeri');
        console.log('i numeri che hai indovinato sono: ' + numeriCorretti)
    }

}, 1000);


function intersect(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
}

  



import WortListe from "./WortListe";

export default class Game{
    #wort = [];
    #anzahlVersuche = 6;
    #fehlVersuche = 0;
    #erratendeBuchstaben = [];
    #BuchstabenImWort = new Set();
    #alleBenutztenBuchstaben = [];
    #gameOver = false;
    #gameOverAusgabe = '';


    constructor(){
        let zufallsWort = WortListe[Math.floor(Math.random() * WortListe.length)];
        zufallsWort = zufallsWort.toUpperCase();
        this.#wort = zufallsWort.split('');
        this.addToSet(this.#wort);
    }

    addToSet(aktuellesSet){
        aktuellesSet.forEach(buchstabe => this.#BuchstabenImWort.add(buchstabe));
    }

    get Wort(){
        return this.#wort.map(buchstabe => buchstabe);
    }

    get AnzahlVersuche(){
        return this.#anzahlVersuche;
    }

    get FehlVersuche(){
        return this.#fehlVersuche;
    }

    get ErratendeBuchstaben(){
        return this.#erratendeBuchstaben.map(buchstabe => buchstabe);
    }

    get BuchstabenImWort(){
        return this.#BuchstabenImWort;
    }

    get AlleBenutztenBuchstaben(){
        return this.#alleBenutztenBuchstaben.map(buchstabe => buchstabe);
    }

    get GameOver(){
        return this.#gameOver;
    }

    get GameOverAusgabe(){
        return this.#gameOverAusgabe;
    }


    pruefeBuchstabe(buchstabe){
        this.#alleBenutztenBuchstaben.push(buchstabe);
        
        if (this.#wort.includes(buchstabe)){
            this.#erratendeBuchstaben.push(buchstabe);
        } else {
            this.#fehlVersuche++;
        }

        this.pruefeSpielStatus();
    }

    pruefeSpielStatus(){
        
        if (this.#fehlVersuche >= this.#anzahlVersuche){
            this.#gameOver = true;
            this.#gameOverAusgabe = 'Du hast leider Verloren!';
        } else if (this.#BuchstabenImWort.size === this.#erratendeBuchstaben.length){
            this.#gameOver = true;
            this.#gameOverAusgabe = 'Bravo, Du hast gewonnen!';
        }       
    }


    zeigeErratenesWort(){
        let bereitsErratentenesWort = [];
        this.#wort.forEach(buchstabe => {
            if (this.#erratendeBuchstaben.includes(buchstabe)){
                bereitsErratentenesWort.push(buchstabe) ;
            } else {
                bereitsErratentenesWort.push('_');
            }
        });
        const laenge = bereitsErratentenesWort.length - 1;
        for(let i = 0; i < laenge; i++){
            bereitsErratentenesWort[i] = bereitsErratentenesWort[i] + ' ';
        }
        return bereitsErratentenesWort.map(buchstabe => buchstabe);
    }

    resetGame(){
        let zufallsWort = WortListe[Math.floor(Math.random() * WortListe.length)];
        zufallsWort = zufallsWort.toUpperCase();
        this.#wort = zufallsWort.split('');
        this.addToSet(this.#wort);
        this.#anzahlVersuche = 6;
        this.#fehlVersuche = 0;
        this.#erratendeBuchstaben = [];
        this.#BuchstabenImWort = new Set();
        this.#alleBenutztenBuchstaben = [];
        this.#gameOver = false;
        this.#gameOverAusgabe = '';
    }

}
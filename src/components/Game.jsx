import WordList from "./WordList";

export default class Game{
    #word = [];
    #numberAttempts = 6;
    #failedAttempts = 0;
    #guessedLetters = [];
    #containedLetters = [];
    #alreadyUsedLetters = [];
    #gameOver = false;
    #gameOverOutput = '';


    constructor(){
        let randomWord = WordList[Math.floor(Math.random() * WordList.length)];
        randomWord = randomWord.toUpperCase();
        this.#word = randomWord.split('');
        let contLett = new Set(this.#word);
        this.#containedLetters = [...contLett];
    }


    get Word(){
        return this.#word.map(letter => letter);
    }

    get NumberOfAttempts(){
        let axe = ''
        let verbleibendeVersuche = this.#numberAttempts - this.#failedAttempts;    
        for (let i = 0; i < verbleibendeVersuche; i++) {
            axe += ' 🪓 ';
        }
        return axe;
    }

    get LightningFailedAttempts(){
        let lightnig = ''
        for (let i = 0; i < this.#failedAttempts; i++) {
            lightnig += '⚡';
        }
        return lightnig;
    }

    get FailedAttempts(){
        return this.#failedAttempts;
    }

    get GuessedLetters(){
        return this.#guessedLetters.map(letter => letter);
    }

    get ContainedLetters(){
        return this.#containedLetters;
    }

    get AlreadyUsedLetters(){
        return this.#alreadyUsedLetters.map(letter => letter);
    }

    get GameOver(){
        return this.#gameOver;
    }

    set GameOver(value){
        this.#gameOver = value;
    }

    get GameOverOutput(){
        return this.#gameOverOutput;
    }


    checkLetter(letter){
        this.#alreadyUsedLetters.push(letter);
        
        if (this.#word.includes(letter)){
            this.#guessedLetters.push(letter);
        } else {
            this.#failedAttempts++;
        }

        this.checkGameStatus();
    }

    checkGameStatus(){
        
        if (this.#failedAttempts >= this.#numberAttempts){
            this.#gameOver = true;
            this.#gameOverOutput = 'Du hast leider Verloren!';
        } else if (this.#containedLetters.length === this.#guessedLetters.length){
            this.#gameOver = true;
            this.#gameOverOutput = 'Bravo, Du hast gewonnen!';
        }       
    }


    showGuessedWord(){
        let alredyGuessedPart = [];
        this.#word.forEach(letter => {
            if (this.#guessedLetters.includes(letter)){
                alredyGuessedPart.push(letter) ;
            } else {
                alredyGuessedPart.push('_');
            }
        });
        const laenge = alredyGuessedPart.length - 1;
        for(let i = 0; i < laenge; i++){
            alredyGuessedPart[i] = alredyGuessedPart[i] + ' ';
        }
        return alredyGuessedPart.map(letter => letter);
    }

    resetGame(){
        let randomWord = WordList[Math.floor(Math.random() * WordList.length)];
        randomWord = randomWord.toUpperCase();
        this.#word = randomWord.split('');
        let biw = new Set(this.#word);
        this.#containedLetters = [...biw];
        this.#numberAttempts = 6;
        this.#failedAttempts = 0;
        this.#guessedLetters = [];
        this.#alreadyUsedLetters = [];
        this.#gameOver = false;
        this.#gameOverOutput = '';
    }

}
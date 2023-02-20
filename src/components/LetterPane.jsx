import './LetterPane.css';
import BuchstabenListe from './BuchstabenListe';
import { useState } from "react";
import GameOverPane from './GameOverPane';
import Game from './Game';


export default function LetterPane( props){
    let game = props.game;
    const anzVers = game.AnzahlVersuche;
    const wort = game.Wort;
    const errateneBuchst = game.ErratendeBuchstaben;
    const buchstImWort = game.BuchstabenImWort;
    const alleBuchstaben = game.AlleBenutztenBuchstaben;   
    const fehlVersuche = game.FehlVersuche;
    const erratenesWort = game.zeigeErratenesWort();
    const gameOver = game.GameOver;

    const [changeState, setChangeState] = useState(false);

    const alphabet = BuchstabenListe;
    
    const handleClick = (event) => {
        const geklickterBuchstabe = event.currentTarget.innerText;
        const id = event.currentTarget.id - 1;
        game.pruefeBuchstabe(geklickterBuchstabe);
        game.zeigeErratenesWort();
        alphabet[id].dis = true;       
        setChangeState(!changeState);
    }

    const changeGameStatus = () => {
        game.resetGame();
        alphabet.forEach(buchstabe => buchstabe.dis = false);
        setChangeState(!changeState);
    }


    return(
        <article>
            <div className='rel'>
                <h2>Wähle einen Buchstaben</h2>
                <section className="letterPane">
                    {alphabet.map(buchstabe => <button key={buchstabe.id} id={buchstabe.id} onClick={handleClick} disabled={buchstabe.dis} className="green">{buchstabe.val}</button>)}
                </section>
                <section className="dataPane">
                    <h3>Das zufällig Wort: {wort}</h3>
                    <h3>Anzahl Versuche: {anzVers}</h3>
                    <h3>Fehlversuche: {fehlVersuche}</h3>
                    <h3>Erratene Buchstaben: {errateneBuchst}</h3>
                    <h3>Buchstaben im Wort: {buchstImWort}</h3>
                    <h3>benutzte Buchstaben: {alleBuchstaben}</h3> 
                    <h3>Das zu suchende Wort: {erratenesWort}</h3>
                    <h3>Game Over: {gameOver}</h3>
                </section>
            </div>
            <div>
            {gameOver && <GameOverPane game={game} state={changeGameStatus}/>}
            </div>  
        </article>
    );
}
import './DisplayPane.css';


function DisplayPane(props){
    const game = props.game;
    

    return (
        <article>          
            <h2>Das zu suchende Wort:</h2>
            <section className="dataPane">
                <h3>Das zufällig Wort: {game.Word}</h3>
                <h3>Das zu suchende Wort: {game.showGuessedWord()}</h3>
                <h3>Anzahl Versuche: {game.NumberOfAttempts}</h3>
                <h3>Fehlversuche: {game.LightningFailedAttempts}</h3>
                <h3>Erratene Buchstaben: {game.GuessedLetters}</h3>
                <h3>Buchstaben im Wort: {game.ContainedLetters}</h3>
                <h3>benutzte Buchstaben: {game.AlreadyUsedLetters}</h3> 
                {/* <h3>Game Over: {game.GameOver.toString()}</h3> */}
            </section>
        </article>
  );
}

export default DisplayPane;
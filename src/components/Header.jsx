import './Header.css';
import WordList from './WordList';


function Header() {
  const anzahlWoerter = WordList.length;
  const anzahlVersuche = 6;

  const description = [`Bei diesem Spiel muss ein zufällig ausgewähltes Wort - aus einer Liste von ${anzahlWoerter} deutschen Wörter - erraten werden.`, `Du hast insgesammt ${anzahlVersuche} Versuche. Nutze sie weise.`, `Viel Spaß!`];

  return (
    <header>
      <h1>Willkommen bei Hangman</h1>
        {description.map(desc => <h2 key={crypto.randomUUID()}>{desc}</h2>)}   
    </header>
  );
}

export default Header;
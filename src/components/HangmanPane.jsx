import "./HangmanPane.css";

export default function HangmanPane( props){
    const svgGalgen = [
        <rect x="10" y="95" width="80" height="10" fill="#000"/>,
        <rect x="35" y="10" width="10" height="85" fill="#000"/>,
        <rect x="35" y="8" width="50" height="8" fill="#000"/>,
        <line x1="80" y1="8" x2="80" y2="30" stroke="#000" strokeWidth="2"/>,
        <rect x="78" y="30" width="4" height="6" fill="#000"/>,
        <path d="M80,35 C 55,60 105,60 80,35" stroke="black" stroke-width="2" fill="none" />
    ];
    const svgElemente = [
        <circle cx="80" cy="40" r="10" fill="#000"/>,
        <line x1="80" y1="45" x2="80" y2="65" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="50" x2="75" y2="65" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="50" x2="85" y2="65" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="65" x2="75" y2="85" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="65" x2="85" y2="85" stroke="#000" strokeWidth="2"/>
    ];

    function showHangMan(){
        if(props.failedAttempts > 0){
            return svgElemente.slice(0, props.failedAttempts);
        }
    }

    return (
        <article className="dataPane" >
            <section className="hangman">
                    <svg viewBox="0 0 100 100">
                        {svgGalgen.map((svgElement, index) => <g key={index}>{svgElement}</g>)}
                        {showHangMan()?.map((svgElement, index) => <g key={index}>{svgElement}</g>)}
                    </svg>               
            </section>
        </article>  
    );   
}
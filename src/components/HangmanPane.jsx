import "./HangmanPane.css";

export default function HangmanPane( props){
    const svgGalgen = [
        <rect x="10" y="95" width="80" height="10" fill="#000"/>,
        <rect x="35" y="10" width="10" height="85" fill="#000"/>,
        <rect x="35" y="8" width="50" height="8" fill="#000"/>,
        <line x1="80" y1="8" x2="80" y2="30" stroke="#000" strokeWidth="2"/>
    ];
    const svgElemente = [
        <circle cx="80" cy="30" r="10" fill="#000"/>,
        <line x1="80" y1="40" x2="80" y2="65" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="45" x2="75" y2="60" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="45" x2="85" y2="60" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="65" x2="75" y2="90" stroke="#000" strokeWidth="2"/>,
        <line x1="80" y1="65" x2="85" y2="90" stroke="#000" strokeWidth="2"/>
    ];

    function showHangMan(){
        if(props.failedAttempts > 0){
            return svgElemente.slice(0, props.failedAttempts);
        }
    }

    return (
        <article className="hangman" >
            <section>
                <div className="dataPane">
                    <svg viewBox="0 0 100 100">
                        {svgGalgen.map((svgElement, index) => <g key={index}>{svgElement}</g>)}
                        {showHangMan()?.map((svgElement, index) => <g key={index}>{svgElement}</g>)}
                    </svg>
                </div>               
            </section>
        </article>  
    );   
}
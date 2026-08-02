import { ProgressBar } from "./ProgressBar.jsx"

const LetterDensity = ({ sortLetters }) => {
    return (
        <section>
            <h2>Cantidad de letras</h2>
            {/* <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos ▲" : "Ver mas ▼"}</button> */}
            <article>
                <ul>
                    {
                        sortLetters.slice(0, 5).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
                    }
                </ul>
            </article>

            <details>
                <summary>See more</summary>
                <ul className="meter-list">
                    {
                        sortLetters.slice(5, sortLetters.length).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
                    }
                </ul>
            </details>
        </section>
    )
}

export { LetterDensity }
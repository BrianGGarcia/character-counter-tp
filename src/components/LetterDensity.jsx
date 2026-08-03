import { ProgressBar } from "./ProgressBar.jsx"

const LetterDensity = ({ sortLetters }) => {
    return (
        <section className="letter-density">
            <h3>Cantidad de letras</h3>
            <section className="density-list">
                <ul>
                    {
                        sortLetters.slice(0, 5).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
                    }
                </ul>
            </section>

            <details>
                <summary className="see-more">Ver mas</summary>
                <section className="density-list">
                    <ul>
                        {
                            sortLetters.slice(5, sortLetters.length).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
                        }
                    </ul>
                </section>
            </details>
        </section>
    )
}

export { LetterDensity }
import { useState } from "react"
import { Header } from "./components/Header.jsx"

const App = () => {

  const [text, setText] = useState("Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app esta funcionando correctamente.")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  const [showAll, setShowAll] = useState(false)

  const character = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length
  const readingTime = Math.ceil(words / 200)

  const handleChangeTextArea = (e) => {
    const value = e.target.value

    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñü]/g, "")
  const total = cleanText.length
  // diccionario → clave/valor
  const dictionaryLetters = {}

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: (amountLetter / total) * 100
    }

    return infoToRenderLetter
  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  // const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

  return (
    <main>
      <Header />
      <h2>Analyze your text <br />
        in real-time.</h2>
      <textarea
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextArea}
        value={text}
      ></textarea>
      <div>
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          Excluir espacios
        </label>

        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          Limite de caracteres
        </label>
        {
          limitCharacter &&
          <input
            type="number"
            value={limitValue}
            onChange={(e) => setLimitValue(e.target.value)}
          />
        }
      </div>
      <p>Cantidad de caracteres: {character}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
      <p>Tiempo de lectura: ~ {readingTime} minute</p>
      <section>
        <h2>Cantidad de letras</h2>
        {/* <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos ▲" : "Ver mas ▼"}</button> */}
        <article>
          {
            sortLetters.slice(0, 5).map(letter => (
              <div key={letter.letterName}>
                <span>{letter.letterName.toUpperCase()}</span>
                <meter min="0" max="100" value={letter.percentage}></meter>
                <span>{letter.amount} ({letter.percentage.toFixed(1)} % )</span>
              </div>))
          }
        </article>

        <details>
          <summary>See more</summary>
          <ul className="meter-list">
            {
              sortLetters.slice(5, sortLetters.length).map(letter => (
                <div key={letter.letterName}>
                  <span>{letter.letterName.toUpperCase()}</span>
                  <meter min="0" max="100" value={letter.percentage}></meter>
                  <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
                </div>))
            }
          </ul>
        </details>
      </section>
    </main>
  )
}

export { App }

import { useContext, useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controls } from "./components/Controls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"
import { ThemeContext } from "./context/ThemeContext.jsx"

const App = () => {

  const [text, setText] = useState("Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app esta funcionando correctamente.")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)

  const { dark, handleDarkTheme } = useContext(ThemeContext)

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = () => {
    setLimitValue(!limitValue)
  }

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

  const character = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length
  const readingTime = Math.ceil(words / 200)

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñü]/g, "")
  const total = cleanText.length
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

  return (
    <main className={` card ${dark ? "dark-theme" : ""}`} >
      <Header dark={dark} handleDarkTheme={handleDarkTheme} />

      <section className="hero">
        <h2>Analiza tu texto <br />
          en tiempo real.</h2>

        <WriteArea
          handleChangeTextArea={handleChangeTextArea}
          text={text}
        />
      </section>

      <Controls
        excludeSpaces={excludeSpaces}
        handleExcludeSpaces={handleExcludeSpaces}
        limitCharacter={limitCharacter}
        handleChangeInputLimit={handleChangeInputLimit}
        limitValue={limitValue}
        handleLimitValue={handleLimitValue}
        readingTime={readingTime}
      />

      <Stats
        character={character}
        words={words}
        sentences={sentences}
      />

      {
        text && <LetterDensity sortLetters={sortLetters} />
      }

    </main >
  )
}

export { App }

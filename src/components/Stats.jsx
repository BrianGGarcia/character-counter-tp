const Stats = ({ character, words, sentences }) => {

  return (
    <section className="metrics">
      <div className="total-characters">
        <p className="number">{String(character).padStart(2, "0")}</p>
        <p className="label">Cantidad de Caracteres</p>
      </div>
      <div className="word-count">
        <p className="number">{String(words).padStart(2, "0")}</p>
        <p className="label">Cantidad de Palabras</p>
      </div>
      <div className="sentence-count">
        <p className="number">{String(sentences).padStart(2, "0")}</p>
        <p className="label">Cantidad de Oraciones</p>
      </div>
    </section>
  )
}

export { Stats }
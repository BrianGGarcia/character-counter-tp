const Controls = ({ excludeSpaces, handleExcludeSpaces, limitCharacter, handleChangeInputLimit, limitValue, handleLimitValue, readingTime }) => {

    return (
        <section className="controls">
            <div className="checkboxes">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => handleExcludeSpaces(!excludeSpaces)}
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
                        onChange={(e) => handleLimitValue(e.target.value)}
                    />
                }
            </div>

            <div className="reading-time">
                <p>Tiempo de lectura: ~ {readingTime} minute</p>
            </div>
        </section>
    )
}

export { Controls }
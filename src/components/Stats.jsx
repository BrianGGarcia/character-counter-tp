const Stats = ({ character, words, sentences, readingTime }) => {
    return (
        <div>
            <p>Cantidad de caracteres: {character}</p>
            <p>Cantidad de palabras: {words}</p>
            <p>Cantidad de oraciones: {sentences}</p>
            <p>Tiempo de lectura: ~ {readingTime} minute</p>
        </div>
    )
}

export { Stats }
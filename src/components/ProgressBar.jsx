const ProgressBar = ({ letter }) => {

  return (
    <li className="density-item">
      <span className="letter">{letter.letterName.toUpperCase()}</span>
      <progress min="0" max="100" value={letter.percentage}></progress>
      <span className="stat">{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
    </li>
  )
}

export { ProgressBar }
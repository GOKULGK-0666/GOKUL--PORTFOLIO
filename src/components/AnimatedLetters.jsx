export default function AnimatedLetters({ text }) {
  return (
    <span className="animated-letters" aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span
          className="animated-letter"
          style={{ '--letter-index': index }}
          key={`${letter}-${index}`}
        >
          {letter === ' ' ? '\u00a0' : letter}
        </span>
      ))}
    </span>
  )
}

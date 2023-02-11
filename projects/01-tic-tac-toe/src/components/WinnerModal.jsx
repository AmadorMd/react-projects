import { Square } from './Square'
export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return
  const winnerText = winner === false ? 'Tie' : 'The winner is:' + winner
  return (
    <section className='winner'>
      <div className='text'>
        {winnerText}
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Reset Game </button>
        </footer>
      </div>
    </section>
  )
}

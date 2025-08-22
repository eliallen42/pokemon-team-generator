export default function RandomPokemon({
  randomPokemon,
  selectedPokemon,
  onRandom,
  onSelect,
  onClear,
}) {
  // Handles randomizing or clearing the team
  function handleRandomorClear() {
    if (selectedPokemon.length > 0) {
      if (window.confirm("Are you sure you want to clear your team?")) {
        onClear();
      }
    } else {
      onRandom();
    }
  }

  return (
    <div>
      <button
        className="random-button"
        onClick={handleRandomorClear}
        disabled={randomPokemon.length > 0 && selectedPokemon.length === 0}
      >
        {selectedPokemon.length > 0 ? "Clear" : "Random"}
      </button>
      {selectedPokemon.length < 6 ? (
        <ul className="pokemon-grid">
          {randomPokemon.map((p) => (
            <li key={p.id}>
              <button className="pokemon-button" onClick={() => onSelect(p)}>
                <img src={p.sprite} alt={p.name} width={100} height={100} />
              </button>
              {p.name}
            </li>
          ))}
        </ul>
      ) : (
        <span className="message">
          Congratulations!! Your team is complete!
        </span>
      )}
    </div>
  );
}

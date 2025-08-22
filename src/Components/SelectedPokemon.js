export default function SelectedPokemon({ pokemon }) {
  return (
    <div className="selected-pokemon-grid">
      {pokemon.map((p) => (
        <div className="selected-pokemon-card" key={p.id}>
          <img src={p.sprite} alt={p.name} width={80} />
          <h3>{p.name}</h3>
          <p>
            {p.type.map((t) => (
              <span key={t} className="type-badge">
                {t}
              </span>
            ))}
          </p>
          <p>HP: {p.hp}</p>
          <p>Att: {p.att} </p>
          <p>Def: {p.def} </p>
          <p>SpAtt: {p.spatt} </p>
          <p>SpDef: {p.spdef} </p>
          <p>Spd: {p.spd} </p>
        </div>
      ))}
    </div>
  );
}

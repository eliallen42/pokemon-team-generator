import "./index.css";
import POKEMON from "./Data/PokemonData";
import Header from "./Components/Header";
import RandomPokemon from "./Components/RandomPokemon";
import SelectedPokemon from "./Components/SelectedPokemon";
import { useState } from "react";

// Get a random subset of Pokémon
function getRandomPokemon(POKEMON, count) {
  const random = POKEMON.slice().sort(() => 0.5 - Math.random());
  return random.slice(0, count);
}

export default function App() {
  const [randomPokemon, setRandomPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // Generate new random pool, excluding selected Pokémon
  function handleRandomPokemon() {
    const availablePokemon = POKEMON.filter(
      (p) => !selectedPokemon.some((sp) => sp.id === p.id)
    );
    const count = Math.min(6, availablePokemon.length);
    const randomSix = getRandomPokemon(availablePokemon, count);
    setRandomPokemon(randomSix);
  }

  // Add Pokémon to team (max 6)
  function handleSelect(pokemon) {
    if (selectedPokemon.length >= 6) return;
    setSelectedPokemon((prev) => {
      const updated = [...prev, pokemon];
      setTimeout(() => handleRandomPokemon(), 0);
      return updated;
    });
  }

  // Clear team and pool
  function handleClear() {
    setSelectedPokemon([]);
    setRandomPokemon([]);
  }

  return (
    <div>
      <Header />
      <RandomPokemon
        randomPokemon={randomPokemon}
        selectedPokemon={selectedPokemon}
        onRandom={handleRandomPokemon}
        onSelect={handleSelect}
        onClear={handleClear}
      />
      {selectedPokemon.length > 0 && (
        <SelectedPokemon pokemon={selectedPokemon} />
      )}
    </div>
  );
}

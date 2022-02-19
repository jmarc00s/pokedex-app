import React from 'react';
import { useMatch } from 'react-location';
import { LocationGenerics } from '../App';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const {
    data: { pokemons },
  } = useMatch<LocationGenerics>();

  return (
    <section>
      <div className="text-center text-gray-800">
        <h1 className="text-3xl font-bold text-gray-800">Pokedex App</h1>
        <h6 className="text-base font-medium text-gray-500">
          (Clique no pokémon para ver mais detalhes)
        </h6>
      </div>

      <ul className="grid grid-cols-4 mt-10 gap-3">
        {pokemons?.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;

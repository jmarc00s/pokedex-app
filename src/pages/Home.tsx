import React from 'react';
import { Link, useMatch } from 'react-location';
import { useQuery } from 'react-query';
import PokemonCard from '../components/PokemonCard';
import { LocationGenerics } from '../core/config/routes';
import { getPokemons, getPokemonsPaginated } from '../core/services/api';
import { Pokemon } from '../core/types/pokemon';

const Home = () => {
  const pokemons = useQuery<Pokemon[], any>(
    'pokemons',
    () => getPokemonsPaginated(),
    {
      cacheTime: 1 * 60 * 1000,
    }
  );

  if (pokemons.isLoading) {
    return <p> Carregando pokemons...</p>;
  }

  return (
    <section>
      <div className="text-center text-gray-800">
        <h1 className="text-3xl font-bold text-gray-800">Pokedex App</h1>
        <h6 className="text-base font-medium text-gray-500">
          (Clique no pokémon para ver mais detalhes)
        </h6>
      </div>

      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center mt-10 gap-3">
        {pokemons.data?.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/details/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;

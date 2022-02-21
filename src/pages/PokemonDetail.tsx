import React from 'react';
import { Link, useMatch } from 'react-location';
import { useQuery } from 'react-query';
import PokemonCard from '../components/PokemonCard';
import PokemonTable from '../components/PokemonTable';
import { usePokemon } from '../core/config/query';
import { getPokemonById } from '../core/services/api';

const PokemonDetail = () => {
  const {
    params: { pokemonId },
  } = useMatch();

  const { data: pokemon, isLoading } = usePokemon(Number(pokemonId));

  if (isLoading) {
    return <p>Carregando detalhes...</p>;
  }

  return (
    <section className="h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Detalhes</h1>
        <Link to="/">
          <span className="underline text-blue-400">Voltar para início</span>
        </Link>
      </div>

      {pokemon && (
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full gap-10">
          <PokemonCard pokemon={pokemon} size="large" />
          <PokemonTable pokemon={pokemon} />
        </div>
      )}
    </section>
  );
};

export default PokemonDetail;

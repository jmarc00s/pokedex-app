import React from 'react';
import { Link, useMatch } from 'react-location';
import { LocationGenerics } from '../App';
import PokemonCard from '../components/PokemonCard';
import PokemonTable from '../components/PokemonTable';

const PokemonDetail = () => {
  const {
    data: { pokemon },
  } = useMatch<LocationGenerics>();
  console.log(pokemon);

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

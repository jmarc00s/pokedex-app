import React from 'react';
import { Pokemon } from '../core/types/pokemon';
import PokemonTypeTag from './PokemonTypeTag';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="h-64 w-64 rounded shadow flex flex-col items-center justify-center p-2 cursor-pointer text-gray-800 bg-white">
      <img
        height={120}
        width={120}
        className="mb-8"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon"
      />
      <p className="text-center font-semibold mb-2">{pokemon.name}</p>
      <PokemonTypeTag type={pokemon.type} />
    </div>
  );
};

export default PokemonCard;

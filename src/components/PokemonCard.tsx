import React from 'react';
import { PokemonType } from '../core/types/pokemon';

interface PokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="h-64 w-64 rounded shadow flex flex-col p-2 cursor-pointer text-gray-800">
      <img
        className="mb-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQx2UbkHVVgPVNyw8XmjbJJdhwFGX9v8nfgw&usqp=CAU"
        alt="pokemon"
      />
      <p className="text-center font-semibold">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;

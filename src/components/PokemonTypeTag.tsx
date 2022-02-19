import classNames from 'classnames';
import React from 'react';
import { PokemonType } from '../core/types/pokemon';

interface PokemonTypeTagProps {
  type: PokemonType;
}

const PokemonTypeTag = ({ type }: PokemonTypeTagProps) => {
  const classes = {
    'bg-green-500 text-gray-50': type === 'Grass',
    'bg-orange-500 text-gray-50': type === 'Fire',
    'bg-blue-500 text-gray-50': type === 'Water',
    'bg-yellow-500 text-gray-50': type === 'Electric',
    'bg-amber-900 text-gray-50': type === 'Ground',
    'bg-purple-500 text-gray-50': type === 'Poison',
    'bg-gray-400 text-gray-50': type === 'Normal',
    'bg-zinc-500 text-gray-50': type === 'Bug',
  };

  return (
    <span
      className={classNames('px-4 py-0.5 text-sm rounded-xl shadow ', classes)}
    >
      {type}
    </span>
  );
};

export default PokemonTypeTag;

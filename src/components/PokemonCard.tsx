import classNames from 'classnames';
import { Pokemon } from '../core/types/pokemon';
import PokemonTypeTag from './PokemonTypeTag';

type PokemonCardSize = 'normal' | 'large';

interface PokemonCardProps {
  pokemon: Pokemon;
  size?: PokemonCardSize;
}

const PokemonCard = ({ pokemon, size }: PokemonCardProps) => {
  const defaultClasses = `rounded shadow flex flex-col items-center justify-center p-2 text-gray-800 bg-white`;

  const cardSize = {
    'h-64 w-64': size === 'normal' || !size,
    'h-96 w-96': size === 'large',
  };

  const fontSize = {
    'text-base': size === 'normal' || !size,
    'text-lg': size === 'large',
  };

  function renderImg() {
    if (size === 'large') {
      return (
        <img
          height={240}
          width={240}
          className="mb-8"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon"
        />
      );
    }

    return (
      <img
        height={120}
        width={120}
        className="mb-8"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon"
      />
    );
  }

  return (
    <div className={classNames(defaultClasses, cardSize)}>
      {renderImg()}

      <p className={classNames('text-center font-semibold mb-2', fontSize)}>
        {pokemon.name}
      </p>
      <div className="flex gap-1">
        <PokemonTypeTag type={pokemon.type} />
        {pokemon.type_2?.length > 0 && <PokemonTypeTag type={pokemon.type_2} />}
      </div>
    </div>
  );
};

export default PokemonCard;

import React from 'react';
import { Pokemon } from '../core/types/pokemon';

interface PokemonTableProps {
  pokemon: Pokemon;
}

const PokemonTable = ({ pokemon }: PokemonTableProps) => {
  const columns = [
    {
      title: 'Ataque',
      value: pokemon.attack,
    },
    {
      title: 'Defesa',
      value: pokemon.defense,
    },
    {
      title: 'Tipo',
      value: pokemon.type,
    },
    {
      title: 'HP',
      value: pokemon.hp,
    },
    {
      title: 'Ataque especial',
      value: pokemon.special_attack,
    },
    {
      title: 'Defesa especial',
      value: pokemon.special_defense,
    },
    {
      title: 'Velocidade',
      value: pokemon.speed,
    },
  ];

  return (
    <div className="rounded shadow overflow-hidden bg-white p-8 w-full">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3 tracking-wider">Atributo</th>
            <th className="px-6 py-3 tracking-wider">Valor</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column, index) => {
            return (
              <tr key={index} className=" border-b border-gray-200">
                <td className="px-6 py-3 text-lg text-gray-800">
                  {column.title}
                </td>
                <td className="text-center font-semibold text-gray-800">
                  {column.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;

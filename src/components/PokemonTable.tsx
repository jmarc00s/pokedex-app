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
  ];

  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th>Atributo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {columns.map((column, index) => {
          return (
            <tr key={index}>
              <td>{column.title}</td>
              <td>{column.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonTable;

import React from 'react';
import { useMatch } from 'react-location';
import { LocationGenerics } from '../App';

const Home = () => {
  const {
    data: { pokemons },
  } = useMatch<LocationGenerics>();

  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Pokemons</h1>
      </div>

      <ul className="grid grid-cols-4 mt-10 gap-3">
        {pokemons?.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;

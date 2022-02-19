import React from 'react';
import { useMatch } from 'react-location';

const Home = () => {
  const {
    data: { pokemons },
  } = useMatch();

  return (
    <div>
      HomePage <pre>{JSON.stringify(pokemons)}</pre>
    </div>
  );
};

export default Home;

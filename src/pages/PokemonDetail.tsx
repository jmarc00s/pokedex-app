import React from 'react';
import { useMatch } from 'react-location';

const PokemonDetail = () => {
  const {
    data: { pokemon },
  } = useMatch();

  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Detalhes</h1>
      </div>
      {pokemon && <pre>{JSON.stringify(pokemon)}</pre>}
    </section>
  );
};

export default PokemonDetail;

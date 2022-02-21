import React, { useState } from 'react';
import { Link } from 'react-location';
import Button from '../components/Button';
import PokemonCard from '../components/PokemonCard';
import { usePokemons } from '../core/config/query';

const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const { data: pokemons, isLoading, refetch } = usePokemons(page, limit);

  function fetchNextPage() {
    setPage(page + 1);
    refetch();
  }

  function fetchPreviousPage() {
    setPage(page - 1);
    refetch();
  }

  return (
    <section>
      <div className="text-center text-gray-800">
        <h1 className="text-3xl font-bold text-gray-800">Pokedex App</h1>
        <h6 className="text-base font-medium text-gray-500">
          (Clique no pokémon para ver mais detalhes)
        </h6>
      </div>

      {isLoading ? (
        <p> Carregando pokemons...</p>
      ) : (
        <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center mt-10 gap-3">
          {pokemons?.map((pokemon, index) => (
            <li key={index}>
              <Link to={`/details/${pokemon.id}`}>
                <PokemonCard pokemon={pokemon} />
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-center items-center gap-3 p-5">
        <Button
          label="Pagina anterior"
          onClick={fetchPreviousPage}
          disabled={isLoading || page === 1}
        />
        <p className="text-lg font-semibold text-gray-800">Página {page}</p>
        <Button
          label="Próxima página"
          onClick={fetchNextPage}
          disabled={isLoading}
        />
      </div>
    </section>
  );
};

export default Home;

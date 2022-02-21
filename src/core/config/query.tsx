import { QueryClient, useQuery } from 'react-query';
import { getPokemonById, getPokemonsPaginated } from '../services/api';

export const queryClient = new QueryClient();

export function usePokemons(page = 1, limit = 20) {
  return useQuery('pokemons', () => getPokemonsPaginated(page, limit));
}

export function usePokemon(pokemonId: number) {
  return useQuery(['pokemon', pokemonId], () => getPokemonById(pokemonId));
}

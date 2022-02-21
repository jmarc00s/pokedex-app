import { MakeGenerics, ReactLocation, Route } from 'react-location';
import Home from '../../pages/Home';
import { getPokemonById, getPokemonsPaginated } from '../services/api';
import { Pokemon } from '../types/pokemon';
import { queryClient } from './query';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    pokemons: Pokemon[];
    pokemon: Pokemon;
  };
}>;

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
    loader: async () =>
      queryClient.getQueryData('pokemons') ??
      queryClient.fetchQuery('pokemons', () => getPokemonsPaginated()),
  },
  {
    path: '/details/:pokemonId',
    element: () =>
      import('../../pages/PokemonDetail').then((module) => <module.default />),
    loader: async ({ params }) =>
      queryClient.getQueryData('pokemon') ??
      queryClient.fetchQuery(['pokemon', Number(params.pokemonId)], () =>
        getPokemonById(Number(params.pokemonId))
      ),
  },
];

export const location = new ReactLocation<LocationGenerics>();

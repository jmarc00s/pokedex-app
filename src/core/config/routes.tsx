import { MakeGenerics, ReactLocation, Route } from 'react-location';
import Home from '../../pages/Home';
import { api, getPokemons } from '../services/api';
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
    // loader: async () =>
    //   queryClient.getQueryData('pokemons') ??
    //   queryClient.fetchQuery('pokemons', getPokemons),
  },
  {
    path: '/details/:pokemonId',
    element: () =>
      import('../../pages/PokemonDetail').then((module) => <module.default />),
    loader: async ({ params }) => {
      const { data } = await api(`pokemons?id=${params.pokemonId}`);
      return {
        pokemon: data[0],
      };
    },
  },
];

export const location = new ReactLocation<LocationGenerics>();

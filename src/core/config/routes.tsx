import { MakeGenerics, ReactLocation, Route } from 'react-location';
import Home from '../../pages/Home';
import { api } from '../services/api';
import { Pokemon } from '../types/pokemon';

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
    loader: async () => {
      const { data } = await api('pokemons?_page=1&_limit=40');
      return {
        pokemons: data,
      };
    },
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

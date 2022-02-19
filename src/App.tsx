import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from 'react-location';
import Home from './pages/Home';

import { api } from './core/services/api';
import { Pokemon } from './core/types/pokemon';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    pokemons: Pokemon[];
    pokemon: Pokemon;
  };
}>;

const routes: Route[] = [
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
      import('./pages/PokemonDetail').then((module) => <module.default />),
    loader: async ({ params }) => {
      const { data } = await api(`pokemons?id=${params.pokemonId}`);
      return {
        pokemon: data[0],
      };
    },
  },
];

const location = new ReactLocation<LocationGenerics>();

function App() {
  return (
    <Router location={location} routes={routes}>
      <main className=" bg-gray-50">
        <section className="container mx-auto pt-8">
          <Outlet />
        </section>
      </main>
    </Router>
  );
}

export default App;

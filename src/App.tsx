import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from 'react-location';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import { api } from './core/services/api';
import { PokemonType } from './core/types/pokemon';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    pokemons: PokemonType[];
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
    element: <PokemonDetail />,
  },
];

const location = new ReactLocation<LocationGenerics>();

function App() {
  return (
    <Router location={location} routes={routes}>
      <main className="container mx-auto pt-8">
        <Outlet />
      </main>
    </Router>
  );
}

export default App;

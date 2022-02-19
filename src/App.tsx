import { Outlet, ReactLocation, Route, Router, useMatch } from 'react-location';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import { api } from './core/services/api';
import { useEffect } from 'react';

const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
    loader: async () => ({
      pokemons: await api('pokemon'),
    }),
  },
  {
    path: '/details/:pokemonId',
    element: <PokemonDetail />,
  },
];

const location = new ReactLocation();

function App() {
  return (
    <Router location={location} routes={routes}>
      <main className="container flex flex-col p-8">
        <Outlet />
      </main>
    </Router>
  );
}

export default App;

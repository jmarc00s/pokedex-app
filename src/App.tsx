import { Outlet, Router } from 'react-location';
import { routes, location } from './core/config/routes';

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

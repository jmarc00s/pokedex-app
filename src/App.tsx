import { Outlet, Router } from 'react-location';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './core/config/query';
import { routes, location } from './core/config/routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <main className=" bg-gray-50">
          <section className="container mx-auto pt-8">
            <Outlet />
          </section>
        </main>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

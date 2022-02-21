import { Outlet, Router } from 'react-location';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './core/config/query';
import { routes, location } from './core/config/routes';
import { AppProvider } from './core/context/AppContext';

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes}>
          <main className=" bg-gray-50">
            <section className="container mx-auto pt-8">
              <Outlet />
            </section>
          </main>
        </Router>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;

import { createContext, useState } from 'react';

interface AppContextProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  page: 1,
  limit: 20,
  setPage: (page: number) => {},
  setLimit: (limit: number) => {},
});

interface AppProviderProps {
  children: any;
}

export function AppProvider({ children }: AppProviderProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  return (
    <AppContext.Provider
      value={{
        page,
        limit,
        setLimit,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

import axios from 'axios';
import { Pokemon } from '../types/pokemon';

axios.defaults.baseURL = 'http://localhost:4000';

export const api = axios;

export async function getPokemons(): Promise<Pokemon[]> {
  const response = await api.get('/pokemons');
  return response.data;
}

export async function getPokemonsPaginated(
  page: number = 1,
  limit: number = 20
): Promise<Pokemon[]> {
  const response = await api.get(`/pokemons?_page=${page}&_limit=${limit}`);
  return response.data;
}

export async function getPokemonById(id: number): Promise<Pokemon> {
  const { data } = await api.get(`pokemons?id=${id}`);
  return data[0];
}

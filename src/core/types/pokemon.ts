export type PokemonType =
  | 'Grass'
  | 'Fire'
  | 'Water'
  | 'Poison'
  | 'Bug'
  | 'Electric'
  | 'Ground'
  | 'Normal'
  | 'Fairy'
  | 'Flying'
  | 'Dragon'
  | 'Dark'
  | 'Psychic';
export interface Pokemon {
  id: number;
  name: string;
  type: PokemonType;
  type_2: PokemonType;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  generation: number;
  legendary: boolean;
}

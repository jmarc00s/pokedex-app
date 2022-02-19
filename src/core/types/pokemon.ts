export type PokemonType =
  | 'Grass'
  | 'Fire'
  | 'Water'
  | 'Poison'
  | 'Bug'
  | 'Electric'
  | 'Ground'
  | 'Normal';
export interface Pokemon {
  id: number;
  name: string;
  type: PokemonType;
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

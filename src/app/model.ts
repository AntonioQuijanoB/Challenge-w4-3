type CharacterType = 'king' | 'fighter' | 'counselor' | 'squire';

export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: CharacterType | '';
  reignYears?: number;
  weapon?: string;
  skillLevel?: number;
  adviseTo?: CharacterType | '';
  servesTo?: CharacterType | '';
  serveLevel?: number;
}

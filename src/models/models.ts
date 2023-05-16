export interface CharacterBody {
  id: number;
  name: string;
  personal: CharacterPersonal;
}

export interface CharacterPersonal {
  affiliation: string;
  sex: string;
}

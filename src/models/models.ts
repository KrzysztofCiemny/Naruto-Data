export interface CharacterBody {
  id: number;
  name: string;
  personal: CharacterPersonal;
}

export interface CharacterPersonal {
  affiliation: string;
  sex: string;
}

export interface ClanBody {
  id: number;
  name: string;
  members: ClanMember[];
}

export interface ClanMember {
  id: number;
  name: string;
}

export interface TailedBeastBody {
  id: number;
  name: string;
  jinchuriki: Jinchuriki[];
}

export interface Jinchuriki {
  id: number;
  name: string;
}

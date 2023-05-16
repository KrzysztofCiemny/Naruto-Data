import { ref } from "vue";
import { CharacterBody, ClanBody } from "../models/models";

const allCharacters = ref<CharacterBody[]>();
const allClans = ref<ClanBody[]>();

export default function useApi() {
  const getAllCharacters = async () => {
    try {
      const response = await fetch("https://api.narutodb.xyz/character");
      const data = await response.json();
      allCharacters.value = data.characters.map((character: any) => {
        return {
          id: character.id,
          name: character.name,
          personal: {
            affiliation: charactersAffiliationCheck(
              character.personal.affiliation
            ),
            sex: character.personal.sex ? character.personal.sex : "unknown",
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllClans = async () => {
    try {
      const response = await fetch("https://api.narutodb.xyz/clan");
      const data = await response.json();
      allClans.value = data.clans.map((clan: any) => {
        return {
          id: clan.id,
          name: clan.name,
          members: clan.characters.map((character: any) => {
            return {
              id: character.id,
              name: character.name,
            };
          }),
        };
      });
      console.log(allClans.value);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllCharacters,
    allCharacters,
    getAllClans,
    allClans,
  };
}

const charactersAffiliationCheck = (affiliation: string) => {
  if (affiliation && Array.isArray(affiliation)) {
    return affiliation[0];
  } else if (affiliation) {
    return affiliation;
  } else {
    return "unknown";
  }
};

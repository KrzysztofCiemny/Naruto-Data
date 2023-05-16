import { ref } from "vue";
import { CharacterBody } from "../models/models";

const allCharacters = ref<CharacterBody[]>();

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
      console.log(allCharacters.value);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllCharacters,
    allCharacters,
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

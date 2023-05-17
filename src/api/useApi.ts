import { ref } from "vue";
import { CharacterBody, ClanBody, TailedBeastBody } from "../models/models";

const allCharacters = ref<CharacterBody[]>();
const allClans = ref<ClanBody[]>();
const allTailedBeasts = ref<TailedBeastBody[]>();

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
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTailedBeasts = async () => {
    try {
      const response = await fetch("https://api.narutodb.xyz/tailed-beast");
      const data = await response.json();
      allTailedBeasts.value = data.tailedBeasts.map((beast: any) => {
        return {
          id: beast.id,
          name: beast.name,
          jinchuriki: beast.personal.jinchūriki.map(
            (it: string, index: number) => {
              return {
                id: index,
                name: it,
              };
            }
          ),
        };
      });
      console.log(allTailedBeasts.value);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllCharacters,
    allCharacters,
    getAllClans,
    allClans,
    getAllTailedBeasts,
    allTailedBeasts,
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

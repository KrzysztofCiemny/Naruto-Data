import { ref } from "vue";

export default function useApi() {
  const getAllCharacters = async () => {
    try {
      const response = await fetch("https://api.narutodb.xyz/character");
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllCharacters,
  };
}

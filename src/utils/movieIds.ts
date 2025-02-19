/**
 * Essa função é um bypass para uma inconsistência da API do SWAPI:
 * O ID dos filmes na listagem não corresponde ao da URL de detalhes.
 */
const handleMovieId = (id: number): number => {
  const movieIdMap: Record<number, number> = {
    1: 4,
    2: 5,
    3: 6,
    4: 1,
    5: 2,
    6: 3,
  };

  return movieIdMap[id] ?? id;
};

/**
 * Retorna o número romano correspondente ao ID do filme.
 */
export const handleMovieSymbol = (id: number): string => {
  const romanNumerals: Record<number, string> = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
  };

  return romanNumerals[id] ?? id.toString();
};

export default handleMovieId;

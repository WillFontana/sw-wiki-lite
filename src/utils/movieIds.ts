/**
 * Essa função é um bypass para uma inconsistência da api do swapi:
 * O id dos filmes da listagem não é o mesmo para a url de detalhar;
 */
const handleMovieId = (id: number) => {
  switch (id) {
    case 1:
      return 4;
    case 2:
      return 5;
    case 3:
      return 6;
    case 4:
      return 1;
    case 5:
      return 2;
    case 6:
      return 3;
    default:
      return id;
  }
};

export default handleMovieId;
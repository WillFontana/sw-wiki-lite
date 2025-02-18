export const fetchData = async (urls: string[]) => {
    try {
      const responses = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
      return responses;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  };
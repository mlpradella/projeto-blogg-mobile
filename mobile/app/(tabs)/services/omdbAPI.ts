const API_KEY = 'd1904111';

export const omdbAPI = {
    getRandomMovie: async () => {
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&t=inception`
            );
            const movie = await response.json();
            console.log('Dados do filme:', movie);
            return movie;
        } catch (error) {
            console.log('Erro:', error);
            return null;
        }
    }
};
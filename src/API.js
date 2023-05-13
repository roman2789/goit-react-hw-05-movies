import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

const API_KEY = 'e779e884534a7fdc136df07bb4867833';

export const getTrendingMovies = async () => {
  const movies = await axios.get(`${END_POINTS.trending}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return movies.data.results;
};

export const getSearchMovies = async query => {
  const movies = await axios.get(`${END_POINTS.querySearch}?`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return movies.data.results;
};

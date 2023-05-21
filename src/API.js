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

export const getMovieDetails = async id => {
  const movie = await axios.get(`${END_POINTS.movieDetails}/${id}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return movie.data;
};

export const getMovieCredits = async id => {
  const credits = await axios.get(`movie/${id}${END_POINTS.movieCredits}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return credits.data.cast;
};

export const getMovieReviews = async id => {
  const reviews = await axios.get(`movie/${id}${END_POINTS.movieReviews}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return reviews.data.results;
};

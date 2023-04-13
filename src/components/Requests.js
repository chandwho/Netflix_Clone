const key = 'dc3e4a4d653e523c4ca8ebcbbce29917';

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  originals: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
};

export default requests;


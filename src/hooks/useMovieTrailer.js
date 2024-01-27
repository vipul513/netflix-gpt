import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;
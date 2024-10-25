import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlaying, setPopular, setTopRated, setUpComing } from "../../store/filmSlice";

const BerandaView = ({ ubahCari, hasilFilter }) => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.films.nowPlaying);
  const popularFilms = useSelector((state) => state.films.popular);
  const topRatedFilms = useSelector((state) => state.films.topRated);
  const upComingFilms = useSelector((state) => state.films.upComing);
  
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
          },
        }
      );
      dispatch(setNowPlaying(response.data.results));
    };

    const fetchPopularFilms = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
          },
        }
      );
      dispatch(setPopular(response.data.results));
    };

    const fetchTopRatedFilms = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
          },
        }
      );
      dispatch(setTopRated(response.data.results));
    };

    const fetchUpComingFilms = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
          },
        }
      );
      dispatch(setUpComing(response.data.results));
    };

    fetchNowPlaying();
    fetchPopularFilms();
    fetchTopRatedFilms();
    fetchUpComingFilms();
  }, [dispatch]);

  return (
    <div className="beranda dark:bg-slate-950 dark:text-white">
       <div id="New" className="carousel-item relative w-[auto] h-[300px]">
        <img
          src="https://i.pinimg.com/474x/6a/85/a4/6a85a43599ae1ae511c04a19fde79840.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <h1 className="text-5xl font-bold text-white">WELCOME</h1>
          <label className="input input-bordered text-blue-500 flex items-center gap-2 my-4 w-full max-w-md">
            <input
              type="text"
              className="w-full p-2 rounded-md"
              placeholder="Search"
              onChange={(input) => ubahCari(input.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-left text-2xl font-bold">Search result :</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {hasilFilter?.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl" href={`/Detail/${film.id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-xl" />
              <div className="p-4">
                <a className="text-xl font-semibold" href={`/Detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Now Playing */}
        <h2 className="text-center text-2xl font-bold">Now Playing</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {nowPlaying.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl">
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="p-4">
                <a className="text-xl font-semibold" href={`/detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Movies */}
        <h2 className="text-center text-2xl font-bold">Popular Movies</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {popularFilms.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl">
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="p-4">
                <a className="text-xl font-semibold" href={`/Detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Top Rated */}
        <h2 className="text-center text-2xl font-bold">Top Rated</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {topRatedFilms.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl">
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="p-4">
                <a className="card-title" href={`/Detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <h2 className="text-center text-2xl font-bold">Upcoming</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {upComingFilms.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl">
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="p-4">
                <a className="card-title" href={`/Detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BerandaView.propTypes = {
  ubahCari: PropTypes.func.isRequired,
};

export default BerandaView;

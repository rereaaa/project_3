import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Popular = () => {
  const dispatch = useDispatch();
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    const fetchPopularFilms = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
          },
        }
      );
      dispatch(setPopularFilms(response.data.results));
    };

    fetchPopularFilms();
  }, [dispatch]);

  return (
    <div className="popular  dark:bg-slate-950 dark:text-white">
      <div className="relative">
        <img
          src="https://i.pinimg.com/564x/cc/e6/9b/cce69b4e6015ba6352b9479ee8e37520.jpg"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Popular</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {popularFilms.map((film) => (
          <div
            key={film.id}
            className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
              alt={film.title}
            />
            <div className="p-4">
              <a className="card-title" href={`/detail/${film.id}`}>
                {film.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopular } from "../../store/filmSlice";

const Popular = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((state) => state.films.popular);

  useEffect(() => {
    const fetchPopularFilms = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTg5OTc2MC4yOTQ0MzksInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RbYHHzFgC-tgQALfqAkESS5m0NPymJJHu3Kc_xyLf5c`,
          },
        }
      );
      dispatch(setPopular(response.data.results));
    };

    fetchPopularFilms();
  }, [dispatch]);

  return (
    <div className="popular  dark:bg-slate-950 dark:text-white">
      <div className="carousel-item relative w-[auto] h-[300px]">
        <img
          src="https://i.pinimg.com/736x/2e/d7/4b/2ed74be20e244994bccf5f531fdfd3fe.jpg"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Popular</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
      {popularFilms.map((film) => (
            <div key={film.id} className="card bg-whitesmoke dark:bg-slate-750 dark:text-white w-96 shadow-xl">
              <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="p-4">
                <a className="text-xl font-semibold" href={`/Detail/${film.id}`}>{film.title}</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Popular;

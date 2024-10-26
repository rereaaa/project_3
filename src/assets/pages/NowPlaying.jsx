import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlaying } from "../../store/filmSlice";

const NowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.films.nowPlaying);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTg5OTc2MC4yOTQ0MzksInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RbYHHzFgC-tgQALfqAkESS5m0NPymJJHu3Kc_xyLf5c`,
          },
        }
      );
      dispatch(setNowPlaying(response.data.results));
    };

    fetchNowPlaying();
  }, [dispatch]);

  return (
    <div className="popular  dark:bg-slate-950 dark:text-white">
      <div className="carousel-item relative w-[auto] h-[300px]">
        <img
          src="https://i.pinimg.com/474x/0b/8a/dc/0b8adca1c7cc2581763168ca8c0a9622.jpg"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-gray-700 text-4xl font-bold">Now Playing</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 dark:bg-slate-600 dark:text-white ">
      {nowPlaying.map((film) => (
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

export default NowPlaying;

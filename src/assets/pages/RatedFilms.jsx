import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatedFilms } from "../../store/ratedFilmsSlice";

const RatedFilms = () => {
  const dispatch = useDispatch();
  const { ratedFilms, loading, error } = useSelector((state) => state.ratedFilms);

  useEffect(() => {
    dispatch(fetchRatedFilms());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 dark:bg-slate-950 dark:text-white">
      <h2 className="text-center text-2xl font-bold mb-4">Rated Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ratedFilms.map((film) => (
          <div key={film.id} className="bg-base-200 p-4 rounded-lg shadow-md dark:bg-slate-600 dark:text-white">
            <img
              src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
              alt={film.title}
              className="w-48 h-98 rounded-lg mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold">{film.title}</h3>
            <p className="text-gray-700 mb-2 dark:text-white"><strong>Overview:</strong> {film.overview}</p>
            <p className="text-gray-700 mb-2 dark:text-white"><strong>Rating:</strong> {film.vote_average}</p>
            <a className="btn btn-primary mt-4" href={`/detail/${film.id}`}>
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatedFilms;

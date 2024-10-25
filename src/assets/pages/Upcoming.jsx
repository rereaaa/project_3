import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Upcoming = () => {
  const dispatch = useDispatch();
  const [upcomingFilms, setUpcomingFilms] = useState([]);

  useEffect(() => {
    const fetchUpcomingFilms = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`
        }
      });
      setUpcomingFilms(response.data.results);
    };

    fetchUpcomingFilms();
  }, [dispatch]);

  return (
    <div className="upcoming dark:bg-slate-950 dark:text-white">
      <h2 className="text-center text-2xl">Upcoming Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingFilms.map(film => (
          <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl m-4">
            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
            <div className="p-4">
              <a className="card-title" href={`/detail/${film.id}`}>{film.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Upcoming;

// Detail.js
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilmDetails, setUserRating } from '../../store/filmSlice';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const filmDetails = useSelector(state => state.film.filmDetails);
  const userRating = useSelector(state => state.film.userRating);

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          headers: {
            Authorization: `Bearer <YOUR_TOKEN_HERE>`,
          }
        });
        dispatch(setFilmDetails(response.data));
      } catch (error) {
        console.error("Error fetching film details:", error);
      }
    };

    fetchFilmDetails();
  }, [id, dispatch]);

  const postRating = async (ratingValue) => {
    try {
      await axios.post(`https://api.themoviedb.org/3/movie/${id}/rating`, { value: ratingValue }, {
        headers: {
          Authorization: `Bearer <YOUR_TOKEN_HERE>`,
        }
      });
      dispatch(setUserRating(ratingValue));
    } catch (error) {
      console.error("Error posting rating:", error);
    }
  };

  if (!filmDetails) return <p>Loading...</p>;

  const genreNames = filmDetails.genres.map(genre => genre.name).join(', ');

  return (
    <div className="container mx-auto p-4 dark:bg-black">
      <div className="text-center mb-4">
        <img src={`https://image.tmdb.org/t/p/original/${filmDetails.poster_path}`} alt={filmDetails.title} className="w-48 h-48 mx-auto rounded-md object-cover" />
      </div>
      <h1 className="font-bebas text-3xl text-center mb-2">{filmDetails.title}</h1>
      <p className="text-md mb-2"><strong>Overview:</strong> {filmDetails.overview}</p>
      <p className="text-md mb-2"><strong>Release Date:</strong> {filmDetails.release_date}</p>
      <p className="text-md mb-2"><strong>Genres:</strong> {genreNames}</p>
      <p className="text-md mb-4"><strong>Rating:</strong> {filmDetails.vote_average}</p>
      <div className="rating mb-4">
        <p className="px-2"><strong>Your Rate: </strong></p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
          <input
            key={rating}
            type="radio"
            name="user-rating"
            className="mask mask-star-2 bg-orange-400"
            checked={userRating === rating}
            onChange={() => postRating(rating)}
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;

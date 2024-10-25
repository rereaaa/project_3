// // RatedFilms.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const RatedFilms = () => {
//   const [ratedFilms, setRatedFilms] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.themoviedb.org/3/movie/movie_id/rating')
//       .then(response => setRatedFilms(response.data))
//       .catch(error => console.error('Error fetching rated films:', error));
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {ratedFilms.map(film => (
//         <div key={film.id} className="card">
//           <img src={film.poster} alt={film.title} className="w-full h-48 object-cover" />
//           <h3 className="font-bebas text-xl">{film.title}</h3>
//           <p>Rating: {film.userRating}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RatedFilms;
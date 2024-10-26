// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRatedFilms } from "../../store/ratedFilmsSlice";

// const RatedFilms = () => {
//   const dispatch = useDispatch();
//   const { ratedFilms, loading, error } = useSelector((state) => state.ratedFilms);

//   useEffect(() => {
//     dispatch(fetchRatedFilms());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="popular dark:bg-slate-950 dark:text-white">
//       <h2 className="text-center text-2xl">Rated Movies</h2>
//       <div className="grid grid-cols-1 gap-8">
//         {ratedFilms.map((film) => (
//           <div key={film.id} className="hero bg-base-200 p-6 rounded-lg shadow-md flex">
//             <img
//               src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
//               alt={film.title}
//               className="w-48 h-98 rounded-lg shadow-xl"
//             />
//             <div className="ml-6">
//               <h1 className="text-4xl font-bold">{film.title}</h1>
//               <p className="py-2">{film.overview}</p>
//               <p className="py-2"><strong>Genres:</strong> {film.genre_ids.join(", ")}</p>
//               <p className="py-2"><strong>Rating:</strong> {film.vote_average}</p>
//               <a className="btn btn-primary mt-4" href={`/detail/${film.id}`}>Get Started</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RatedFilms;

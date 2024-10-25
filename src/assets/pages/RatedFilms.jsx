// import axios from 'axios';
// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';

// const RatedFilms = () => {
//     const dispatch = useDispatch();
//     const [ratedFilms, setRatedFilms] = useState([]);


//     useEffect (() => {
//         const fetchRatedFilms = async () => {
//           const response = await axios.get("https://api.themoviedb.org/3/list/list_id?language=en-US&page=1", {
//             headers: {
//               Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`
//             }
//           });
//           dispatch(setRatedFilms(response.data.results));
//         };

        
//     fetchRatedFilms();
//   }, [dispatch]);

//   return (
//     <div className="popular  dark:bg-slate-950 dark:text-white">
//         <h2 className="text-center text-2xl">Popular Movies</h2>
//         <div className="grid grid-cols-3">
//           {ratedFilms.map(film => (
//             <div key={film.id} className="card bg-whitesmoke dark:bg-slate-950 dark:text-white w-96 shadow-xl">
//               <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
//               <div className="p-4">
//                 <a className="card-title" href={`/detail/${film.id}`}>{film.title}</a>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//       className="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-4xl font-bold">{film.title}</h1>
//       <p className="py-6">{film.overview}</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>  
//     </div>
//   )
// }

// export default RatedFilms;
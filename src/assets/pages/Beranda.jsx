import { useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import BerandaView from "./BerandaView";
import { useSearchParams } from "react-router-dom";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Beranda = () => {
  const [state, dispatchLocal] = useReducer(reducer, nilaiDefault);
  const [searchParams, setSearchParams] = useSearchParams();
  const cariFilms = searchParams.get("carifilms") || "";

  const ubahCari = useCallback(async (input) => {
    setSearchParams({ carifilms: input });
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDE3ZDZlMDgxYzI4MzBlYjYyMGU1NWRlOWYzZWViOCIsIm5iZiI6MTcyOTI5OTcxNy4wODk4NDYsInN1YiI6IjY3MDQ4MzAyNTQ1NGI4NjIzMzY5YjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZZ19MsdjSOloDzdKFgNnUDtKGvRJSpdreT5uzFihB4`,
        }
      }
    );
    const data = response.data.results;
    dispatchLocal({ type: "SET_FILTER", payload: data });
  }, [setSearchParams, dispatchLocal]);

  useEffect(() => {
    if (cariFilms) {
      ubahCari(cariFilms);
    }
  }, [cariFilms]);

  const hasilFilter = cariFilms ? state.filterData : state.data;

  return (
    <div>
      <BerandaView
        cariFilms={cariFilms}
        filterData={state.filterData}
        hasilFilter={hasilFilter}
        ubahCari={ubahCari}
      />
    </div>
  );
};

export default Beranda;

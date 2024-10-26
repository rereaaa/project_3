import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./assets/component/Navbar";
import Beranda from "./assets/pages/Beranda";
import Footer from "./assets/component/Footer";
import TemaContext from "./context/TemaContext";
import { Provider } from "react-redux";
import store from "./store/store";
import RatedFilms from "./assets/pages/RatedFilms";
import Detail from "./assets/pages/Detail";
import Popular from "./assets/pages/Popular";
import Movie from "./assets/pages/TopRated";
import NowPlaying from "./assets/pages/NowPlaying";
import TopRated from "./assets/pages/TopRated";
import UpComing from "./assets/pages/Upcoming";


function App() {
  const theme = useState("light");

  return (
    <>
      <BrowserRouter>
        <TemaContext.Provider value={theme}>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/Detail/:id" element={<Detail />} />
              <Route path="/RatedFilms" element={<RatedFilms />} />
              <Route path="/Popular" element={<Popular />} />
              <Route path="/UpComing" element={<UpComing />} />  
              <Route path="/Movie" element={<Movie />}/>
              <Route path="/NowPlaying" element={<NowPlaying />}/>
              <Route path="/TopRated" element={<TopRated />}/>
            </Routes>
            <Footer />
          </Provider>
        </TemaContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

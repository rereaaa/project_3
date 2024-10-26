import { useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "../../context/TemaContext";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../store/action/langAction";
import { userAdmin } from "../../store/action/userAction";

const Navbar = () => {
  // Uncomment and define your props here
  const [getTheme, setTheme] = useContext(TemaContext);
  const root = window.document.documentElement;

  const theme = useSelector((state) => state.theme);
  const lang = useSelector((state) => state.lang);
  const user = useSelector((state) => state.user);

  const dispacthRedux = useDispatch();
  console.log(theme);
  console.log(lang);
  console.log(user);

  console.log(getTheme);

  const handleTheme = () => {
    if (getTheme == "light") {
      setTheme("dark");
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      setTheme("light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  return (
    <div className="navbar dark:bg-slate-950">
      <div className="navbar dark:bg-slate-950 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-950 dark:text-white"
            >
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <a>Categori</a>
                <ul className="p-2">
                  <li>
                    <Link to="/Popular">Popular</Link>
                  </li>
                  <li>
                    <Link to="/">Now Playing</Link>
                  </li>
                  <li>
                    <Link to="/Upcoming">Up Coming</Link>
                  </li>
                  <li>
                    <Link to="/">Top Rated</Link>
                  </li>
                </ul>
                </li>
              <li>
                  <Link to={"/RatedFilms"}>Rated Films</Link>
                </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-center">tonton xv</a>
        </div>
        <div className="navbar hidden lg:flex dark:bg-slate-950 dark:text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Beranda</Link>
            </li>
            <li>
                <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">
                Categori
            </div>
                <ul 
                tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button to="/Popular">Popular</button>
                  </li>
                  <li>
                    <Link to="/">Now Playing</Link>
                  </li>
                  <li>
                    <Link to="/Upcoming">Up Coming</Link>
                  </li>
                  <li>
                    <Link to="/">Top Rated</Link>
                  </li>
                </ul>
                </div>
            </li>
            <li>
              <Link to={"/RatedFilms"}>Rated Films</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              👾
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => dispacthRedux(userAdmin("admin"))}>
                  Admin
                </button>
              </li>
              <li>
                <button onClick={() => dispacthRedux(userAdmin("superadmin"))}>
                  Super Admin
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              🔤
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => dispacthRedux(setLang("id"))}>
                  Indonesia
                </button>
              </li>
              <li>
                <button onClick={() => dispacthRedux(setLang("en"))}>
                  English
                </button>
              </li>
            </ul>
          </div>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={() => handleTheme()}
              checked={getTheme == "light" ? false : true}
            />
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Ensure this line is present

import React from "react";
import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png";
import TVshowsIcon from "../assets/icons/TVshows.png";
import moviesIcon from "../assets/icons/movies.png";
import genresIcon from "../assets/icons/genres.png";
import watchLaterIcon from "../assets/icons/watchLater.png";
import photoForProfile from "../assets/dani.jpg"

function Navbar() {
  const handelEnterContent = () => {
    const additionalContent = document.getElementById("additional-content");
    additionalContent.style.opacity = 1;
    additionalContent.style.transform = "translateY(0)";
    const additionalContentUser = document.getElementById("additional-content-user")
    additionalContentUser.style.opacity = 1;
    const additionalContentUserPhoto = document.getElementById("additional-content-user-photo")
    additionalContentUserPhoto.style.opacity = 1;
  };

  const handelLeaveContent = () => {
    const additionalContent = document.getElementById("additional-content");
    additionalContent.style.opacity = 0;
    additionalContent.style.transform = "translateY(100%)";
    const additionalContentUserPhoto = document.getElementById("additional-content-user-photo")
    additionalContentUserPhoto.style.opacity = 0;
  };

  const handelEnter = (evn) => {
    const textElement = evn.currentTarget.querySelector(".text-overlay");
    textElement.style.opacity = 0.8;
    textElement.style.backgroundColor = "transparent";
  };

  const handelLeave = (evn) => {
    const textElement = evn.currentTarget.querySelector(".text-overlay");
    textElement.style.opacity = 0;
  };

  return (
    <nav
      onMouseEnter={handelEnterContent}
      onMouseLeave={handelLeaveContent}
      className="relative flex justify-start items-center h-screen hover:h-[889px] w-[100px] hover:w-[200px] hover:transition-transform hover:scale-105  bg-black overflow-hidden"
      style={{ position: 'absolute', zIndex: 1 }}
    >
      <div id="additional-content-user" className="absolute bottom-[750px] left-7 right-0 p-4  opacity-0 transform translate-y-100 transition-all space-y-4 font-bold">
        <img src={photoForProfile} alt="/" id="additional-content-user-photo"  className="absolute right-[100px] opacity-0 h-[80px] w-[80px] rounded-full overflow-hidden "  />
        <h3 className="absolute left-[80px] top-[30px] ">Danile</h3>
      </div>
      <ul className="flex flex-col items-start space-y-8 p-6">
        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img src={searchIcon} alt="Search" className="mr-4 h-6 w-6" />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black w-full font-bold">
            Search
          </span>
        </li>

        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img src={homeIcon} alt="Home" className="mr-4 h-6 w-6" />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black w-full font-bold">
            Home
          </span>
        </li>

        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img src={TVshowsIcon} alt="TV shows" className="mr-4 h-6 w-6" />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black whitespace-nowrap  w-full font-bold">
            TV shows
          </span>
        </li>

        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img src={moviesIcon} alt="Movies" className="mr-4 h-6 w-6" />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black w-full font-bold">
            Movies
          </span>
        </li>

        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img src={genresIcon} alt="Genres" className="mr-4 h-6 w-6" />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black w-full font-bold">
            Genres
          </span>
        </li>

        <li
          className="flex pr-4 w-full hover:border-[8px] hover:border-[solid] hover:bg-gray-600 hover:border-gray-600 transition-transform hover:scale-105 rounded "
          onMouseEnter={handelEnter}
          onMouseLeave={handelLeave}
        >
          <img
            src={watchLaterIcon}
            alt="Watch Later"
            className="mr-4 h-6 w-6"
          />
          <span className="text-overlay opacity-0 transition-opacity duration-300 bg-black whitespace-nowrap w-full font-bold">
            Watch Later
          </span>
        </li>
      </ul>
      <div
        id="additional-content"
        className="absolute bottom-10 left-7 right-0 p-4 opacity-0 transform translate-y-100 transition-all space-y-4 font-bold text-gray-300"
      >
        <p>LANGUAGE</p>
        <p>GET HELP</p>
        <p>EXIT</p>
      </div>
    </nav>
  );
}

export default Navbar;

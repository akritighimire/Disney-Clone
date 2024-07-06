import { useEffect, useRef, useState } from "react";
import globalApi from "../services/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 40;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 40;
  };

  return (
    <>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
    mx-2 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
    mx-2 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex w-full px-8 py-8 gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[300px] object-left-top object-cover rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-n "
          />
        ))}
      </div>
    </>
  );
};

export default Slider;

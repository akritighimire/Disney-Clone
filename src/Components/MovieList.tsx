import { useEffect, useRef, useState } from "react";
import globalApi from "../services/globalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId,index_}) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    globalApi.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <>
      <div className="flex ">
        <HiChevronLeft
          className={` md:block text-white text-[30px] absolute cursor-pointer ${index_%2==0? 'mt-[150px]' : 'mt-[80px]' }`}
          onClick={() => sliderLeft(elementRef.current)}
        />
        <div
          ref={elementRef}
          className="mx-10 flex overflow-x-auto gap-8
            scrollbar-hide scroll-smooth pt-4 px-3 pb-4"
        >
          {movieList.map((item) => (
            <>{index_%2==0?  <MovieCard movie={item} /> : <HrMovieCard movie={item}/>  }
              
            </>
          ))}
        </div>
        <HiChevronRight
          className={` md:block text-white text-[30px] absolute
    mx-10 mt-[150px] cursor-pointer right-0 ${index_%3==0? 'mt-[80px]':'mt-[150px]' }`}
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
    </>
  );
};

export default MovieList;

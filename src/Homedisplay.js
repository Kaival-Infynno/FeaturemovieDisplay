import React, { useEffect, useState } from "react";
import { getMovieData } from "./services/movieSclice";
import { useDispatch, useSelector } from "react-redux";
import rightArrow from "./images/rightArrow.png";
import leftnav from "./images/LA.png";
import rightNav from "./images/RA.png";
import Favorite from "./images/Favorite.png";
import imdb from "./images/imdb.png";
import apple from "./images/apple.png";
import moment from "moment";
import "./input.css";
const Homedisplay = () => {
  const dispatch = useDispatch();
  const [oldData, setData] = useState([]);
  const { letestMovieData, isLoading } = useSelector((state) => ({
    letestMovieData: state.movieData.letestMovieData,
    isLoading: state.movieData.isLoading,
  }));

  useEffect(() => {
    dispatch(getMovieData());
  }, [dispatch]);

  useEffect(() => {
    if (
      letestMovieData &&
      letestMovieData.results &&
      letestMovieData.results.length
    ) {
      setData(letestMovieData.results);
    }
  }, [letestMovieData]);

  return (
    <div>
      <div className="flex flex-row md:justify-between justify-around xl:pl-24 lg:pl-10 md:pl-12 pl-4  xl:pr-20 lg:pr-6 md:pr-10 pr-2">
        <div className="mainTitle lg:mb-11  mb-4 ">Featured Movie</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5 ">
            <img src={rightArrow} />
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-center ">
        <div>
          <img
            src={leftnav}
            className=" w-full mt-32 xl:ml-6 lg:ml-2 md:ml-2  pr-2 lg:pr-0 hidden md:block  ml-8 mr-6  lg:w-6 xl:w-12 md:w-10 "
          />
        </div>
        <div className="flex md:flex-row flex-col  xl:space-x-20 lg:space-x-6 md:space-x-4 space-x-0  ">
          {oldData &&
            oldData.length &&
            oldData.slice(8, 12).map((res) => (
              <div className="">
                <div className="relative  sm:flex-col xl:w-64 lg:w-56 md:w-40 ">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${res.poster_path}`}
                    className="lg:h-96 md:h-72  w-64 "
                  />
                  <div className="absolute top-4 right-4">
                    <img src={Favorite} className="" />
                  </div>
                </div>

                <div className="pt-3 dateInside ">
                  {moment(res.release_date).format("YYYY")}
                </div>
                <div className="insideTitle  xl:w-64 lg:w-56 md:w-40 w-64">
                  {res.title}
                </div>
                <div className="pt-3 flex flex-row justify-between  xl:w-64 lg:w-56 md:w-40 w-64">
                  <div className="flex lg:flex-row md:flex-col ">
                    <div>
                      <img src={imdb} />
                    </div>
                    <div className="imdbrating lg:pl-2.5  lg:py-0.5 md:py-2 ">
                      {res.vote_average * 10} / 100
                    </div>
                  </div>
                  <div className="flex flex-row pb-4 md:pb-0 ">
                    <div>
                      <img src={apple} />
                    </div>
                    <div className="imdbrating py-0.5 pl-2.5">
                      {res.popularity.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="  ">
          <img
            src={rightNav}
            className=" lg:w-6  xl:w-12 md:w-8 mr-6 ml-1  lg:ml-2   mt-32  hidden md:block   "
          />
        </div>
      </div>
    </div>
  );
};
export default Homedisplay;

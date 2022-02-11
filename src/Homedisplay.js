import React, { useEffect } from "react";
import {
  getMovieData,
  getUCMovieData,
  getVidios,
  getCastData,
} from "./services/movieSclice";
import { useDispatch, useSelector } from "react-redux";
import rightArrow from "./images/rightArrow.png";
import leftnav from "./images/LA.png";
import rightNav from "./images/RA.png";
import Favorite from "./images/Favorite.png";
import imdb from "./images/imdb.png";
import apple from "./images/apple.png";
import VFacebook from "./images/VectorFacebook.png";
import VInstagram from "./images/Vectorinsta.png";
import VTwitter from "./images/VectorTwiter.png";
import VYoutube from "./images/Vectoryoutube.png";
import ReactPlayer from "react-player";
import moment from "moment";
import Carousel from "react-elastic-carousel";
import "./input.css";

const Homedisplay = () => {
  const dispatch = useDispatch();
  const { letestMovieData } = useSelector((state) => ({
    letestMovieData: state.movieData.letestMovieData,
  }));
  const { upcomingMdata } = useSelector((state) => ({
    upcomingMdata: state.movieData.upcomingMdata,
  }));
  const { allVidios } = useSelector((state) => ({
    allVidios: state.movieData.allVidios,
  }));
  const { allCast } = useSelector((state) => ({
    allCast: state.movieData.allCast,
  }));

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 4, itemsToScroll: 4 },
  ];
  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  ];

  useEffect(() => {
    dispatch(getMovieData());
    dispatch(getUCMovieData());
    dispatch(getVidios());
    dispatch(getCastData());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-row md:justify-between justify-around xl:pl-28 2xl:pl-32 lg:pl-20 md:pl-20 pl-4 xl:pr-28 2xl:pr-28 lg:pr-20 md:pr-20 pr-2 lg:mt-16 md:mt-6 mt-4">
        <div className="mainTitle lg:mb-11 mb-4">Featured Movie</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
          className="mx-5"
        >
          {letestMovieData &&
            letestMovieData.results &&
            letestMovieData.results.map((res) => (
              <div key={res.id}>
                <div className="relative sm:flex-col xl:w-64 lg:w-48 md:w-36 w-48">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${res.poster_path}`}
                    className="xl:h-96 lg:h-72 md:h-64 w-64"
                    alt="not found"
                  />

                  <div className="absolute top-4 right-4">
                    <img src={Favorite} alt="not found" />
                  </div>
                </div>
                <div className="pt-3 dateInside">
                  {moment(res.release_date).format("YYYY")}
                </div>
                <div className="insideTitle xl:w-64 lg:w-48 md:w-36 w-48">
                  {res.title}
                </div>
                <div className="pt-3 flex flex-row justify-between xl:w-64 lg:w-48 md:w-36 w-48">
                  <div className="flex lg:flex-row md:flex-col">
                    <div>
                      <img src={imdb} alt="not found" />
                    </div>
                    <div className="imdbrating lg:pl-2.5 lg:py-0.5 md:py-2">
                      {res.vote_average * 10} / 100
                    </div>
                  </div>
                  <div className="flex flex-row pb-4 md:pb-0">
                    <div>
                      <img src={apple} alt="not found" />
                    </div>
                    <div className="imdbrating py-0.5 pl-2.5">
                      {res.popularity.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>

      {/* upComing */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-28 2xl:pl-32 lg:pl-20 md:pl-20 pl-4 xl:pr-28 2xl:pr-28 lg:pr-20 md:pr-20 pr-2 lg:mt-16 md:mt-6 mt-4">
        <div className="mainTitle lg:mb-11 mb-4">New Arrival</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>

      <div className="flex">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
          className="mx-5"
        >
          {upcomingMdata &&
            upcomingMdata.results &&
            upcomingMdata.results.map((rdata) => (
              <div key={rdata.id}>
                <div className="relative sm:flex-col xl:w-64 lg:w-48 md:w-36 w-48">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${rdata.poster_path}`}
                    className="xl:h-96 lg:h-72 md:h-64 w-64"
                    alt="not found"
                  />

                  <div className="absolute top-4 right-4">
                    <img src={Favorite} alt="not found" />
                  </div>
                </div>
                <div className="pt-3 dateInside">
                  {moment(rdata.release_date).format("YYYY")}
                </div>
                <div className="insideTitle xl:w-64 lg:w-48 md:w-36 w-48">
                  {rdata.title}
                </div>
                <div className="pt-3 flex flex-row justify-between xl:w-64 lg:w-48 md:w-36 w-48">
                  <div className="flex lg:flex-row md:flex-col">
                    <div>
                      <img src={imdb} alt="not found" />
                    </div>
                    <div className="imdbrating lg:pl-2.5 lg:py-0.5 md:py-2">
                      {rdata.vote_average * 10} / 100
                    </div>
                  </div>
                  <div className="flex flex-row pb-4 md:pb-0">
                    <div>
                      <img src={apple} alt="not found" />
                    </div>
                    <div className="imdbrating py-0.5 pl-2.5">
                      {rdata.popularity.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      {/* vidios */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-28 2xl:pl-32 lg:pl-20 md:pl-20 pl-4 xl:pr-28 2xl:pr-28 lg:pr-20 md:pr-20 pr-2 lg:mt-16 md:mt-6 mt-4">
        <div className="mainTitle lg:mb-11 mb-4">Exclusive Videos</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Carousel
          breakPoints={breakPoints1}
          pagination={false}
          renderArrow={myArrow}
          className="mx-5"
        >
          {allVidios &&
            allVidios.results &&
            allVidios.results.map((vdata) => (
              <div key={vdata.id}>
                <div className=" sm:flex-col pt-4 md:pt-0 xl:w-96 lg:w-64 md:w-54 w-48">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${vdata.key}`}
                    width="100%"
                    height="250px"
                    controls={true}
                  ></ReactPlayer>
                </div>
                <div className="insideTitle xl:w-96 lg:w-56 md:w-40 w-44">
                  {vdata.type}
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      {/* Cast */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-28 2xl:pl-32 lg:pl-20 md:pl-20 pl-4 xl:pr-28 2xl:pr-28 lg:pr-20 md:pr-20 pr-2 lg:mt-16 md:mt-6 mt-4">
        <div className="mainTitle lg:mb-11 mb-4">Featured Casts</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more</div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
          className="mx-5"
        >
          {allCast &&
            allCast.cast &&
            allCast.cast.map((cdata) => (
              <div key={cdata.id}>
                <div className="sm:flex-col xl:w-64 lg:w-48 md:w-36 w-48">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${cdata.profile_path}`}
                    className="xl:h-96 lg:h-72 md:h-64 w-64"
                    alt="not found"
                  />
                </div>
                <div className="insideTitle xl:w-64 lg:w-48 md:w-36 w-48">
                  {cdata.name}
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      {/* Footer */}
      <div className=" lg:mt-28 mt-10">
        {/* Logo */}
        <div className="flex flex-row  justify-center md:space-x-12 space-x-6  ">
          <div className="">
            <img src={VFacebook} alt="not found" />
          </div>
          <div>
            <img src={VInstagram} alt="not found" />
          </div>
          <div>
            <img src={VTwitter} alt="not found" />
          </div>
          <div>
            <img src={VYoutube} alt="not found" />
          </div>
        </div>
        {/* policy */}
        <div className="privacy flex flex-row text-center  justify-center md:space-x-12 space-x-4 md:my-9 my-4 ">
          <div>Conditions of Use</div>
          <div>Privacy & Policy</div>
          <div>Press Room</div>
        </div>
        {/* copyright */}
        <div>
          <div className="copyright text-center  ">
            © 2021 MovieBox by Adriana Eka Prayudha{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <img src={leftnav} className="mb-32" alt="not found" />
    ) : (
      <img src={rightNav} className="mb-32" alt="not found" />
    );
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
};
export default Homedisplay;

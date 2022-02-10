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
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
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

  useEffect(() => {
    dispatch(getMovieData());
    dispatch(getUCMovieData());
    dispatch(getVidios());
    dispatch(getCastData());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-row md:justify-between justify-around xl:pl-24 2xl:pl-32 lg:pl-10 md:pl-12 pl-4 xl:pr-24 2xl:pr-32 lg:pr-6 md:pr-10 pr-2 mt-16">
        <div className="mainTitle lg:mb-11 mb-4">Featured Movie</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>

      <div className="flex flex-row ">
        {/* <div>
          <img
            src={leftnav}
            className="  mt-32  hidden md:block  lg:w-12 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4 "
            alt="not found"
          />
        </div> */}
        <div
          id="carouselExampleControls"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div className="flex md:flex-row flex-col xl:space-x-20 lg:space-x-6 md:space-x-4 space-x-0">
              {letestMovieData &&
                letestMovieData.results &&
                letestMovieData.results.map((res) => (
                  <div key={res.id}>
                    <div className="relative sm:flex-col xl:w-64 lg:w-56 md:w-40">
                      <img
                        src={`http://image.tmdb.org/t/p/w185/${res.poster_path}`}
                        className="lg:h-96 md:h-72 w-64"
                        alt="not found"
                      />

                      <div className="absolute top-4 right-4">
                        <img src={Favorite} alt="not found" />
                      </div>
                    </div>
                    <div className="pt-3 dateInside">
                      {moment(res.release_date).format("YYYY")}
                    </div>
                    <div className="insideTitle xl:w-64 lg:w-56 md:w-40 w-64">
                      {res.title}
                    </div>
                    <div className="pt-3 flex flex-row justify-between xl:w-64 lg:w-56 md:w-40 w-64">
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
            </div>
          </div>
        </div>

        {/* <div>
          <img
            src={rightNav}
            className="lg:w-10 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4   mt-32 hidden md:block"
            alt="not found"
          />
        </div> */}
      </div>

      {/* upComing */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-24 2xl:pl-32 lg:pl-10 md:pl-12 pl-4 xl:pr-24 2xl:pr-32 lg:pr-6 md:pr-10 pr-2 mt-16">
        <div className="mainTitle lg:mb-11 mb-4">New Arrival</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div>
          <img
            src={leftnav}
            className="  mt-32  hidden md:block  lg:w-12 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4 "
            alt="not found"
          />
        </div>
        <div className="flex md:flex-row flex-col xl:space-x-20 lg:space-x-6 md:space-x-4 space-x-0">
          {upcomingMdata &&
            upcomingMdata.results &&
            upcomingMdata.results.slice(8, 12).map((rdata) => (
              <div key={rdata.id}>
                <div className="relative sm:flex-col xl:w-64 lg:w-56 md:w-40">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${rdata.poster_path}`}
                    className="lg:h-96 md:h-72 w-64"
                    alt="not found"
                  />
                  <div className="absolute top-4 right-4">
                    <img src={Favorite} alt="not found" />
                  </div>
                </div>
                <div className="pt-3 dateInside">
                  {moment(rdata.release_date).format("YYYY")}
                </div>
                <div className="insideTitle xl:w-64 lg:w-56 md:w-40 w-64">
                  {rdata.title}
                </div>
                <div className="pt-3 flex flex-row justify-between xl:w-64 lg:w-56 md:w-40 w-64">
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
        </div>
        <div>
          <img
            src={rightNav}
            className="lg:w-10 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4   mt-32 hidden md:block"
            alt="not found"
          />
        </div>
      </div>
      {/* vidios */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-24 2xl:pl-32 lg:pl-10 md:pl-12 pl-4 xl:pr-24 2xl:pr-32 lg:pr-6 md:pr-10 pr-2 mt-16">
        <div className="mainTitle lg:mb-11 mb-4">Exclusive Videos</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div>
          <img
            src={leftnav}
            className="  mt-24  hidden md:block  lg:w-10 xl:w-12 md:w-6 xl:mr-6 lg:mr-0 xl:ml-4 md:mr-2"
            alt="not found"
          />
        </div>
        <div className="flex md:flex-row flex-col xl:space-x-12 lg:space-x-8 md:space-x-4 space-x-0 ">
          {allVidios &&
            allVidios.results &&
            allVidios.results.slice(0, 3).map((vdata) => (
              <div key={vdata.id}>
                <div className=" sm:flex-col pt-4 md:pt-0 ">
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
        </div>
        <div>
          <img
            src={rightNav}
            className="lg:w-10 xl:w-12 md:w-6 xl:mr-6 lg:mr-0 xl:ml-4 md:mr-2 mt-24 hidden md:block"
            alt="not found"
          />
        </div>
      </div>
      {/* Cast */}
      <div className="flex flex-row md:justify-between justify-around xl:pl-24 2xl:pl-32 lg:pl-10 md:pl-12 pl-4 xl:pr-24 2xl:pr-32 lg:pr-6 md:pr-10 pr-2 mt-16">
        <div className="mainTitle lg:mb-11 mb-4">Featured Casts</div>
        <div className="flex flex-row py-3">
          <div className="navsee pr-2">See more </div>
          <div className="w-5 h-5">
            <img src={rightArrow} alt="not Found" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div>
          <img
            src={leftnav}
            className="  mt-32  hidden md:block  lg:w-12 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4 "
            alt="not found"
          />
        </div>
        <div className="flex md:flex-row flex-col xl:space-x-20 lg:space-x-6 md:space-x-4 space-x-0">
          {allCast &&
            allCast.cast &&
            allCast.cast.slice(0, 4).map((cdata) => (
              <div key={cdata.id}>
                <div className="relative sm:flex-col xl:w-64 lg:w-56 md:w-40">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${cdata.profile_path}`}
                    className="lg:h-96 md:h-72 w-64"
                    alt="not found"
                  />
                </div>

                <div className="insideTitle xl:w-64 lg:w-56 md:w-40 w-64">
                  {cdata.name}
                </div>
              </div>
            ))}
        </div>
        <div>
          <img
            src={rightNav}
            className="lg:w-10 xl:w-12 md:w-6 xl:mr-6 lg:mr-4 xl:ml-4   mt-32 hidden md:block"
            alt="not found"
          />
        </div>
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
export default Homedisplay;

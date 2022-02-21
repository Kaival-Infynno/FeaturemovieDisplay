import React, { useEffect } from "react";
import {
  getMovieData,
  getUCMovieData,
  getVidios,
  getCastData,
} from "./services/movieSclice";
import { useDispatch, useSelector } from "react-redux";
import leftnav from "./images/LA.png";
import rightNav from "./images/RA.png";
import Carousel from "react-elastic-carousel";
import "./input.css";
import HeaderTitle from "./HeaderTitle";
import DetailsComponent from "./DetailsComponent";
import FooterComponent from "./FooterComponent";
import VidioComponent from "./VidioComponent";

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
    { width: 400, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
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
      {/* Featured */}
      <HeaderTitle name="Featured Movie" />
      <div className="lg:pb-16 md:pb-8 pb-4">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
        >
          {letestMovieData &&
            letestMovieData.results &&
            letestMovieData.results.map((res) => (
              <div>
                <DetailsComponent
                  image={res.poster_path}
                  title={res.title}
                  average={res.vote_average}
                  popular={res.popularity}
                />
              </div>
            ))}
        </Carousel>
      </div>
      {/* upComing */}
      <HeaderTitle name="New Arrival" />
      <div className="lg:pb-16 md:pb-8 pb-4">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
        >
          {upcomingMdata &&
            upcomingMdata.results &&
            upcomingMdata.results.map((rdata) => (
              <DetailsComponent
                image={rdata.poster_path}
                title={rdata.title}
                average={rdata.vote_average}
                popular={rdata.popularity}
              />
            ))}
        </Carousel>
      </div>
      {/* vidios */}
      <HeaderTitle name="Exclusive Videos" />
      <div>
        <Carousel
          breakPoints={breakPoints1}
          pagination={false}
          renderArrow={myArrow}
        >
          {allVidios &&
            allVidios.results &&
            allVidios.results.map((vdata) => (
              <div>
                <VidioComponent vidio={vdata.key} type={vdata.type} />
              </div>
            ))}
        </Carousel>
      </div>
      {/* Cast */}
      <HeaderTitle name="Featured Casts" />
      <div>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
        >
          {allCast &&
            allCast.cast &&
            allCast.cast.map((cdata) => (
              <div key={cdata.id}>
                <div className="sm:flex-col">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${cdata.profile_path}`}
                    className=" w-60 sm:w-full "
                    alt="not found"
                  />
                </div>
                <div className="insideTitle xl:w-64 lg:w-48 md:w-36 w-48 lg:pb-16 md:pb-8 pb-4">
                  {cdata.name}
                </div>
              </div>
            ))}
        </Carousel>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
};
const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <img src={leftnav} className=" pb-28 lg:pl-8 pl-4" alt="not found" />
    ) : (
      <img src={rightNav} className=" pb-28 lg:pr-8 pr-4" alt="not found" />
    );
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
};
export default Homedisplay;

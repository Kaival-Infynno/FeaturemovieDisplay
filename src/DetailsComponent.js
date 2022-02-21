import React from "react";
import Favorite from "./images/Favorite.png";
import imdb from "./images/imdb.png";
import apple from "./images/apple.png";
import moment from "moment";
export default function DetailsComponent(res) {
  return (
    <div key={res.id}>
      <div className="relative sm:flex-col">
        <img
          src={`http://image.tmdb.org/t/p/w185/${res.image}`}
          className="w-60 sm:w-full "
          alt="not found"
        />
        <div className="absolute top-4 right-4">
          <img src={Favorite} alt="not found" />
        </div>
      </div>
      <div className="pt-3 dateInside ">
        {moment(res.release_date).format("YYYY")}
      </div>
      <div className="insideTitle xl:w-64 lg:w-48 md:w-48">{res.title}</div>
      <div className="pt-3 flex flex-row justify-between">
        <div className="flex flex-row">
          <div>
            <img src={imdb} alt="not found" />
          </div>
          <div className="imdbrating pl-2.5 py-0.5">
            {res.average * 10} / 100
          </div>
        </div>
        <div className="flex flex-row pb-4 md:pb-0">
          <div>
            <img src={apple} alt="not found" />
          </div>
          <div className="imdbrating py-0.5 pl-2.5">
            {res.popular.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

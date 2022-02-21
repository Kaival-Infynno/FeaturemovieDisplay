import React from "react";
import rightArrow from "./images/rightArrow.png";
export default function HeaderTitle(props) {
  return (
    <div className="flex flex-row md:justify-between justify-around xl:pl-28 2xl:pl-32 lg:pl-20 md:pl-20 pl-4 xl:pr-28 2xl:pr-28 lg:pr-20 md:pr-20 pr-2">
      <div className="mainTitle lg:mb-11 mb-4">{props.name}</div>
      <div className="flex flex-row py-3">
        <div className="navsee pr-2">See more </div>
        <div className="w-5 h-5">
          <img src={rightArrow} alt="not Found" />
        </div>
      </div>
    </div>
  );
}

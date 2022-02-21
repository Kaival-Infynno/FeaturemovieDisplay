import React from "react";
import ReactPlayer from "react-player";
export default function VidioComponent(vdata) {
  return (
    <div key={vdata.id}>
      <div className=" sm:flex-col pt-4 md:pt-0 xl:w-full lg:w-64 md:w-48 h-full">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${vdata.vidio}`}
          width="100%"
          height="255px"
          controls={true}
        ></ReactPlayer>
      </div>
      <div className="insideTitle xl:w-96 lg:w-56 md:w-40 md:pb-20 pb-10">
        {vdata.type}
      </div>
    </div>
  );
}

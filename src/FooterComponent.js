import React from "react";
import VFacebook from "./images/VectorFacebook.png";
import VInstagram from "./images/Vectorinsta.png";
import VTwitter from "./images/VectorTwiter.png";
import VYoutube from "./images/Vectoryoutube.png";
export default function FooterComponent() {
  return (
    <div>
      {/* Logo */}
      <div className="flex flex-row  justify-center md:space-x-12 space-x-6">
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
      <div className="privacy flex flex-row text-center justify-center md:space-x-12 space-x-4 md:my-9 my-4">
        <div>Conditions of Use</div>
        <div>Privacy & Policy</div>
        <div>Press Room</div>
      </div>
      {/* copyright */}
      <div>
        <div className="copyright text-center">
          © 2021 MovieBox by Adriana Eka Prayudha
        </div>
      </div>
    </div>
  );
}

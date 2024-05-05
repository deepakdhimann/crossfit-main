import React from "react";
import "./GetInTouch.css";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-class">
      <div className="get-in-touch-upper">
        <p className="getintouchpara">
          Get in <span>touch</span>
        </p>
        <Link to="">
          <button className="get-in-touch-aboutme-btn">About me</button>
        </Link>
      </div>

      <div className="get-in-touch-upperline"></div>

      <div className="get-in-touch-middle">
        <img
          className="getintouch-user-photo"
          src="https://res.cloudinary.com/de2n1pm1r/image/upload/v1714949773/jodah5em6y6wqqslgehs.jpg"
          alt=""
        />
        <p className="getintouch-username">Shagun Goel</p>
        <p className="getintouch-userdesc">Full Stack Developer</p>
      </div>

      <div className="get-in-touch-lower">
        <div className="social-media-logoname">
          <Link to="">
            <img
              className="social-media-logos"
              src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474383/whatsapp_ywppw7.png"
              alt=""
            />
            <p className="social-media-whats">Whatsapp</p>
          </Link>
        </div>

        <div className="social-media-logoname">
          <Link to="">
            <img
              className="social-media-logos"
              src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/gmail_kcwpqg.png"
              alt=""
            />
            <p className="social-media-gmail">Gmail</p>
          </Link>
        </div>

        <div className="social-media-logoname">
          <Link to="">
            <img
              className="social-media-logos"
              src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681474382/linkedin_sl7ith.png"
              alt=""
            />
            <p className="social-media-link">Linkedin</p>
          </Link>
        </div>

        <div className="social-media-logoname">
          <Link to="">
            <img
              className="social-media-logos"
              src="https://res.cloudinary.com/dycitvrpg/image/upload/v1682619511/github_czlkvv.png"
              alt=""
            />
            <p className="social-media-tele">GitHub</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

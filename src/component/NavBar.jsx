import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { BiX } from "react-icons/bi";
import navIcon from "../Asset/IMG1.JPG";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "./navbar.css";

const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            {/* <a className="navbar-brand text-primary mr-0"><img src={navIcon} alt="" /></a> */}
            <div className="icons">
              <AiOutlineInstagram className="insta" />
              <AiOutlineTwitter className="twit" />
              <AiFillYoutube className="yout" />
              <BiLogoFacebookCircle className="face" />
              <BiLogoLinkedinSquare className="link" />
            </div>
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <CiMenuFries />
                {/* <i className="fa fa-bars"></i> */}
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">SUBSCRIBE</h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <BiX />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">POLITICS</a>
              </li>
              <li>
                <a className="sd-link">TECHNOLOGY</a>
              </li>
              <li>
                <a className="sd-link">HEALTH</a>
              </li>
              <li>
                <a className="sd-link">NEWS</a>
              </li>
              <li>
                <a className="sd-link">RELATIONSHIP</a>
              </li>
              <li>
                <a className="sd-link">DESIGN</a>
              </li>
              <li>
                <a className="sd-link">ADVERTISING</a>
              </li>
              <li>
                <a className="sd-link">PROGRAMMING</a>
              </li>
              <li>
                <a className="sd-link">CRYPTO-CURRENCY</a>
              </li>
              <li>
                <a className="sd-link">FACT-CHECK</a>
              </li>
              <li>
                <a className="sd-link">PODCAST</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default NavBar;

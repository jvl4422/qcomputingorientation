// Thank you QMIND for this really pretty toggle

import React, { useState, useEffect } from "react";
import "./styles/nav.scss";
import Margins from "components/margins.jsx";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { QCOMPLOGO } from "jsx-assets/qcomputing-logo.svg";
import {NavTab} from "jsx-assets/toggle.svg"
import QCOMPLong from "/jsx-assets/logo-long.svg";

function Nav(props) {
  const [navOn, setNavOn] = useState(false);
  const isTablet = useMediaQuery({ query: "(max-width: 1100px)" });

  useEffect(() => {
    let htmlTag = document.querySelector("html");
    if (isTablet && navOn) {
      htmlTag.style.overflow = "hidden";
    }else{
      htmlTag.style.overflow = "scroll";

    }
  }, [isTablet, navOn]);
  return (
    <Margins>
      <div className="nav-bar">
        <div className="nav-name-logo-container row-c-c">
          <img src={QCOMPLong} alt="Computing Orientation Logo" className="nav-name-logo row-c-fs" />
        </div>
        <button
          className="nav-toggle"
          onClick={() => {
            setNavOn(!navOn);
          }}
        >
          <img src={NavTab} alt="Nav Toggle" />
        </button>
        <div className={"nav-tabs row-c-c " + (navOn ? "nav-mob-tabs-on" : "nav-mob-tabs-off")}>
          <div className="nav-qcomp-logo">
            <img src={QCOMPLOGO} alt="Queen's Computing Logo" />
          </div>
          <Link
            className="nav-tab"
            onClick={() => {
              setNavOn(false);
            }}
            to="/"
          >
            HOME
          </Link>

          {!props.restrictedMode ? 
          <Link
            className="nav-tab"
            onClick={() => {
              setNavOn(false);
            }}
            // Prob need to edit at some point
            to=""
          >
            MEET YOUR TC
          </Link>
          : null}

          <Link
            className="nav-tab"
            onClick={() => {
              setNavOn(false);
            }}
            to="/leadership"
          >
            REGISTRATION
          </Link>

          {!props.restrictedMode ? 
          <Link
            className="nav-tab"
            onClick={() => {
              setNavOn(false);
            }}
            to=""
          >
            SPONSORS
          </Link>
          : null}

          <a
            className="nav-tab"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            FAQ
          </a>

          
        </div>
      </div>
    </Margins>
  );
}

export default Nav;

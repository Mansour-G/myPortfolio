import React, { useMemo, useState } from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const [count, setCount] = useState(0);
    const currentDate = useMemo(() => new Date(), [count]);

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">©{currentDate.getFullYear()} Mansour G</p>
            <p className="p-text">All rights reserverd</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

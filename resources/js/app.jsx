import React, { useState } from "react";
import '../css/style.scss';
import People from "./people-of-interest/People";
import PersonDetail from "./people-of-interest/PersonDetail";

export default function App () {
const [sideNavClosed, setSideNavClosed] = useState(false);

const toggleSidenav = () => {
    setSideNavClosed(!sideNavClosed);
  };

    return (
     
          <body>
          <nav className={`sidenav ${sideNavClosed ? 'sidenav_closed' : ''}`}>
            <div className="sidenav__content">
              <img src="/logos/mi6-seal.png" alt="seal" className="sidenav__image" />
              <ul className="sidenav__links">
                <li className="sidenav__link sidenav__link_active"><a href="#">Home</a></li>
                <li className="sidenav__link"><a href="/people">People of interest</a></li>
              </ul>
            </div>
            <span className="sidenav__arrow" onClick={toggleSidenav}></span>
          </nav>
          <main>
            <h1>Welcome to MI6</h1>
          </main>
          <People/>
          <PersonDetail/>
        </body>
     
    )
}

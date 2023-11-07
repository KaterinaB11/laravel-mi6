import React, { useState } from "react";
import '../../css/style.scss';

export default function Navigation ({content, setContent}) {

    const [sideNavClosed, setSideNavClosed] = useState(false);

const toggleSidenav = () => {
    setSideNavClosed(!sideNavClosed);
  };

    return (
        <nav className={`sidenav ${sideNavClosed ? 'sidenav_closed' : ''}`}>
                <div className="sidenav__content">
                  <img src="/logos/mi6-seal.png" alt="seal" className="sidenav__image" />
                  <ul className="sidenav__links">
                    <li className="sidenav__link sidenav__link_active"><a href="/">Home</a></li>
                    <li className="sidenav__link"><a href="#people">People of interest</a></li>
                    <li className="sidenav__link"><a href="#missions">Missions</a></li>
                  </ul>
                </div>
                <span className="sidenav__arrow" onClick={toggleSidenav}></span>
              </nav>
    )
}

{/* <li className={"sidenav__link" + (content === '' ? ' sidenav__link_active' : '')}  onClick={()=>setContent('')}><a href="#">Home</a></li>


        <li className={"sidenav__link" + (content === 'people-of-interest' ? ' sidenav__link_active' : '')} onClick={()=>setContent('people-of-interest')}><a href="#">People of interest</a></li> */}
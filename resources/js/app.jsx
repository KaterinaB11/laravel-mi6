import React from "react";
import '../css/style.scss';


export default function App () {
    return (
       <body>
           <nav className="sidenav">
                <div className="sidenav__content">
                    <img src="/logos/mi6-seal.png" alt="seal" className="sidenav__image"></img>
                    <ul className="sidenav__links">
                        <li className="sidenav__link sidenav__link_active"><a href="#">Home</a></li>
                        <li className="sidenav__link"><a href="#">People of interest</a></li>
                    </ul>
                </div>
                <span className="sidenav__arrow"></span>
            </nav>
            <main>
                <h1>Welcome to MI6</h1>
            </main>
       </body>
    )
}

import React, { useState } from "react";
import '../css/style.scss';

import Navigation from "./people-of-interest/Navigation";
import MainContent from "./people-of-interest/MainContent";

export default function App () {

    return (
     
        <>
          <body>
              <Navigation/>
              <MainContent/>
          </body>
        </>
    )
}

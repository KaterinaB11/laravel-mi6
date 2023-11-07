import React, { useState } from "react";
import '../css/style.scss';

import Navigation from "./people-of-interest/Navigation";
import MainContent from "./people-of-interest/MainContent";

export default function App () {

  const [content, setContent] = useState('')

    return (
     
        <>
          <body>
              <Navigation content={content} setContent={setContent}/>
              <MainContent content={content}/>
          </body>
        </>
    )
}

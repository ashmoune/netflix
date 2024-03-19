import React from "react";

import "./App.css";
import data from "./assets/movies_rnexgr.json";

function App() {
  const tabData = data;

  const tabMadeWithMap = tabData.map((elem) => {
    {
      elem.images;
    }
    console.log(elem.images);
  });
  return <p>{tabMadeWithMap} </p>;
}

export default App;

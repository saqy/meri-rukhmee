import React, { useEffect, useState } from "react";

import "./App.css";
import { Timer } from "./components/Timer";

import bgGif from "./bg-gif.gif";
import bgRain from "./bg-rain.gif";

function App() {
const [currentWeather, setCurrentWeather] = useState('');
  useEffect(() => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Crowland,uk", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "25b0a0ce6cmsh33e0bd0d7ac1419p1156b7jsnfc13da3d6352"
      }
    })
    .then(response => {
      return response.json()
    
    })
    .then(response=>{
      if (response.weather){
        setCurrentWeather(response.weather[0].main);
      }
    })
    .catch(err => {
      console.log(err);
    });
  });
  return (
    <div className="app" style={{backgroundImage: `url(${bgGif})`}}>
      <Timer initialTime={new Date("2021-01-13T07:30:00.000Z")} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import { getTimeParts } from "../helpers/time";
import Emoji from 'reactjs-emojis';
import "./Timer.css";

export function Timer(props) {
  const [timeValue, setTimeValue] = useState({ d: "", h: "", m: "", s: "" });
  const [progress, setProgress] = useState("");
  useEffect(() => {
    const { initialTime } = props;
    let timeId = setInterval(() => {
      let intinal = new Date(initialTime).getTime();
      let currentTime = new Date().getTime();

      let distance = intinal - currentTime;

      const timeParts = getTimeParts(distance, "d");
      const timePartsSeconds = getTimeParts(distance, "s");

      const progress = normalize(timePartsSeconds.s, 0, 40, 0, 5953100);
      setProgress((40 - progress));
      setTimeValue(timeParts);

      return () => {
        clearInterval(timeId);
      };
    }, 1000);
  }, []);

  const normalize = (unscaledNum, minAllowed, maxAllowed, min, max) => {
    return (
      ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) +
      minAllowed
    );
  };

  return (
      <div id="timer">
        <div id="days">
          {" "}
          {timeValue.d} <span>Days</span>
        </div>
        <div id="hours">
          {" "}
          {timeValue.h} <span>Hours</span>
        </div>
        <div id="minutes">
          {timeValue.m} <span>Minutes</span>
        </div>
        <div id="seconds">
          {timeValue.s} <span>Seconds</span>
        </div>
        <div className="timer-ftr">
        <div class="wrap">
          <div class="slide slideLeft" style={{ left: `${progress}%` }}>
          <Emoji name="hatching_chick" size="40"/> 
          </div>
          <div class="slide slideRight" style={{ right: `${progress}%` }}>
          <Emoji name="panda_face" size="40"/> 
          </div>

        
        </div>
        <span class="tag-line">You. You are my good days</span>
      </div>
      </div>
      
      
  );
}

export default Timer;

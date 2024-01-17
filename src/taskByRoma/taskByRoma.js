import React, { useRef, useState } from "react";

import "./taskByRoma.scss";

const TaskByRoma = () => {
   const rendersNo = useRef(0);
   const [counter, setCounter] = useState(0);

   rendersNo.current = rendersNo.current + 1;
   const increase = () => {
      setCounter((c) => c + 1);
      console.log(`Component rendered ${rendersNo.current} times`);
   };

   const decrease = () => {
      setCounter((c) => c - 1);
      console.log(`Component rendered ${rendersNo.current} times`);
   };

   return (
      <div className="wrapper">
         <div className="wrapper__buttons">
            <button className="red num" onClick={decrease}>
               -
            </button>
            <span className="num">{counter}</span>
            <button className="green num" onClick={increase}>
               +
            </button>
         </div>
      </div>
   );
};

export default TaskByRoma;

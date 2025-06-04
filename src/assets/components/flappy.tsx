import { useState, useEffect } from "react";

const FlappyBirdClone = () => {
    
        const [boxPosition, setBoxPosition] = useState({ top: 220, left: 230 });
        const [score, setScore] = useState(0);
        const [frase, setfrase] = useState("");
        const moveBox = () => {
          const newTop = Math.floor(Math.random() * 400);
          const newLeft = Math.floor(Math.random() * 400);
          setBoxPosition({ top: newTop, left: newLeft });
        };
      
        useEffect(() => {
          const interval = setInterval(moveBox, 550);
          return () => clearInterval(interval);
        }, []);
      
        const catchBox = () => {
          setScore(score + 1);
          if(score <5){setfrase ("ciao ")}
          else{setfrase("")}
         
         
        };
      
        return (
          <div className="relative w-[600px] h-[600px] border-[8px] border-blue-500 bg-gray-200 mx-auto mt-10 flex flex-col items-center overflow-hidden">
            <span className="text-xl font-bold mb-4 text-black">Catch the Box!</span>
            <span className="mb-4 text-black font-bold">Score: {score} {frase}</span>
            <div
              className="absolute w-12 h-12  bg-red-500 cursor-pointer rotate-45 rounded-sm transition-all duration-100 "
              style={{ top: `${boxPosition.top}px`, left: `${boxPosition.left}px` }}
              onClick={catchBox}
            ></div>
          </div>
        );
      };

export default FlappyBirdClone;

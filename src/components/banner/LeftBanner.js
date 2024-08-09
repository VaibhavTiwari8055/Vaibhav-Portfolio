import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "MERN Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vaibhav Tiwari</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Full Stack Developer, I Know good Knowledge of Front-end and my basic interest is more on Back-end.
        I Have making many Web-app projects,I have done most of them on React Library,
        and also I have knowledge about (MERN STACK- node.js, express, react, mongoDB),
        I have also learn the basic security that is required to run your website securely !
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
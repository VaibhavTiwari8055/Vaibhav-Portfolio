import React from 'react'
import { FaLinkedinIn, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
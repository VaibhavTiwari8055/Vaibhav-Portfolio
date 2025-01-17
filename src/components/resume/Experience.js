import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-20 w-full h-[800px] border-l-[5px] border-l-black border-opacity-30 flex flex-col gap-20">
          <ResumeCard
             title="Web Designer"
            subTitle="Mono Infotech - (July 2021 - April 2022)"
            result="Indore, M.P"
            des="Many websites are designed and developed using HTML, CSS,
                 JavaScript, and Bootstrap.
                 Designed the prelanding and landing pages as per the client's
                 requirements.
                 Many safe sites have been created using WordPress.
                 Many websites are designed using WordPress Elementor as per
                 the requirement of the client."
          />
          <ResumeCard
             title="Frontend Developer Intership"
            subTitle="Cyber Flax Pvt Ltd - (Feb 2023 - June 2023)"
            result="Indore, M.P"
            des="5 Month Internship in React JS.
                 Learned and applied React.js to develop dynamic and responsive
                 web applications.
                 Collaborated with senior developers to understand best
                 practices and improve coding skills."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;

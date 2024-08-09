import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Applications"
            subTitle="Shri Vaishnav Vidyapith Viswavidyalaya (2021 - 2023)"
            result="7.54 CGPA"
            //des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Bachelor of Computer Applications"
            subTitle="Shri Vaishnav Vidyapith Viswavidyalaya (2018 - 2021)"
            result="7.0 CGPA"
            //des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Gyanodaya Vidyalaya School (2016 - 2018)"
            result="65%"
            //des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
}

export default Education
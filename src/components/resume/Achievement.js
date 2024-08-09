import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
     
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[5px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Redesign of E-commerce Website"
            subTitle="Increasing Conversion Rates and Reducing Cart Abandonment"
            result="Success"
            des="As the lead web designer for a major e-commerce platform, I spearheaded a comprehensive redesign aimed at enhancing user 
            experience and driving sales. The project involved overhauling the site’s visual design, improving navigation, and optimizing 
            the checkout process for better usability."
          />
          <ResumeCard
            title="Optimizing Website Performance"
            subTitle="Enhancing Load Times and User Retention"
            result="Success"
            des="I implemented advanced CSS and JavaScript optimization techniques to reduce website load times for a high-traffic client site.
             The improvements focused on minimizing render-blocking resources, optimizing images, and leveraging browser caching."
          />
          <ResumeCard
            title="Implementing SEO Best Practices"
            subTitle="Driving Organic Traffic Growth"
            result="Success"
            des="By integrating SEO best practices into the design of a client's website, I ensured that the site was fully optimized for search engines.
             This included keyword research, metadata optimization, and the creation of SEO-friendly content structures."
          />
          <ResumeCard
            title="Enhancing Website Accessibility"
            subTitle="Expanding User Base and Improving Usability"
            result="Success"
            des="I upgraded a client’s website to comply with WCAG 2.1 accessibility standards, ensuring that it was usable by individuals with disabilities.
             This included adding alternative text for images, improving keyboard navigation, and adjusting color contrast for better readability."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

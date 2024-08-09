import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectfour, projectfive, projectsix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA Website"
          des=" The Social Media Clone project is a full-stack web application 
           that replicates key features of popular social media platforms. 
           Users can create profiles, post updates, follow other users,
           like and comment on posts, and receive real-time notifications.!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" An eCommerce project is a web-based platform that enables users to browse,
           search, and purchase products online. The system typically 
           includes features such as product catalogs, user authentication,
           shopping carts, secure payment gateways, and order management."
          src={projectfour}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="This personal portfolio is a modern, responsive web application built using React.
           It showcases my projects, skills, and experiences through a dynamic and interactive interface."
          src={projectfive}
        />
        <ProjectsCard
          title="Youtube Clone"
          des=" This YouTube clone is a fully responsive web application developed using React. 
          It replicates the core features of YouTube, including video playback, search functionality, and user authentication."
          src={projectThree}
        />
        <ProjectsCard
          title="Quiz App"
          des=" The Quiz App is a small web application that presents users with a series of multiple-choice questions.
           Users select their answers,and the app provides immediate feedback, 
           tracks their score, and displays the final result at the end."
          src={projectsix}
        />
        <ProjectsCard
          title="CRUD App"
          des="The CRUD App is a simple web application built with React that allows users to manage a list of
           items (e.g., tasks, products, users).It interacts with a backend server using Axios,
            a promise-based HTTP client, to perform the Create, Read, Update, and Delete operations."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
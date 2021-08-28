import * as React from "react";

import Landing from "./sections/landing/landing";
import Navbar from "./sections/navbar/navbar";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Education from "./sections/education/education";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import PortfolioDataService from "../services/portfolio-data.service";

import "./App.scss";

const App: React.FunctionComponent = () => {
  const {
    userDetails,
    aboutTextList,
    experienceList,
    educationList,
    projectList,
    skillList,
    socialIconList
  } = PortfolioDataService;

  return (
    <div id="portfolio-container" className="portfolio-container">
      <Landing userDetails={userDetails} />
      <Navbar />
      <About aboutTextList={aboutTextList} />
      <Experience experienceList={experienceList} />
      <Education educationList={educationList} />
      <Projects projectList={projectList} />
      <Skills skillList={skillList} />
      <Contact socialIconList={socialIconList} />
      <Footer />
    </div>
  );
};

export default App;

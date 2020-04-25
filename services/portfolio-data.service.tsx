import { IUserDetails } from "../components/sections/landing/landing";
import { IInfoCard } from "../components/shared/info-card/info-card";
import { SkillEnum } from "../constants";
import { IProject } from "../components/shared/project/project";
import { skillMap } from "../components/shared/skill/skill";
import { ISocialIcon } from "../components/shared/social/social";

export default class PortfolioDataService {
  public static readonly userDetails: IUserDetails = {
    firstName: "Harvey",
    lastName: "Delaney",
    title: "Software Engineer"
  };

  public static readonly aboutTextList: string[] = [
    "Hey there! My name is Harvey Delaney.",
    "I'm currently working at Amazon Web Services in Sydney. I'm a full-stack engineer with a strong preference for front-end development. I pride myself on writing clean, readable, testable and extensible code.",
    "Outside of work, I am always looking to learn new frameworks, libraries and programming languages. To help me truly understand these technologies, I use them in my personal projects. I also maintain a technical blog where I document my approach to solving technical problems I've encountered throughout my career."
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "aws.jpg",
      headings: {
        primary: "Amazon Web Services",
        secondary: "Front End Engineer II",
        tertiary: "April 2020 - Present"
      },
      description: ""
    },
    {
      logo: "rs.jpg",
      headings: {
        primary: "RateSetter",
        secondary: "Full Stack Software Engineer",
        tertiary: "July 2018 - April 2020"
      },
      description: `I worked on Uplifting the Wholesale platform – a fork of Ratesetter’s Retail platform that enables institutional investors to invest into the RateSetter platform. Utilising .NET, .NET Core, React, Angular 2+, SQL Server.`
    },
    {
      logo: "cba.png",
      headings: {
        primary: "Commonwealth Bank of Australia",
        secondary: "Software Engineer",
        tertiary: "February 2018 - July 2018"
      },
      description: ""
    },
    {
      logo: "cba.png",
      headings: {
        primary: "Commonwealth Bank of Australia",
        secondary: "Graduate Software Engineer",
        tertiary: "February 2017 - January 2018"
      },
      description:
        "Created a hybrid mobile application using Cordova, Angular 2+ and .NET that greatly improved the experience branch managers have in finding suitable casual or part-time staff replacements."
    },
    {
      headings: {
        primary: "Department of Defence",
        secondary: "Junior Developer",
        tertiary: "March 2016 - November 2016"
      },
      description:
        "Part-time Backend Developer. Involved with consulting internal clients and writing SQL stored procedures and API's in .NET that met client's data requirements.",
      logo: "dod.gif"
    },
    {
      logo: "anu.png",
      headings: {
        primary: "Australian National University",
        secondary: "Senior Resident",
        tertiary: "January 2016 - November 2017"
      },
      description:
        "Senior Resident (AKA Residential Advisor) at the residential college Bruce Hall. Responsible for providing pastoral care and support for over 300 students at the college. Helped organised and facilitate numerous small and large events at the college throughout the year.",
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "anu.png",
      headings: {
        primary: "Australian National University",
        secondary: "Bachelor of Software Engineering (Honours)",
        tertiary: "2013 - 2016"
      },
      description:
        "Undertook a four year Software Engineering degree accredited by Engineers Australia."
    },
    {
      logo: "dara.png",
      headings: {
        primary: "Daramalan",
        secondary: "Secondary Education",
        tertiary: "2007 - 2012"
      },
      description: "Studied here for both highschool and college.",
      isLast: true
    }
  ];

  public static readonly projectList: IProject[] = [
    {
      id: "discaper",
      name: "Discaper",
      description: {
        overview:
          "Discaper is the best website to find, book and discuss your favourite escape rooms in Australia! Find the right escape room for you using Discaper.",
        detailed:
          "I saw that there was a lack of detail given to escape rooms on websites like TripAdvisor. As an escape room goer myself, I want to easily find the scariness, difficulty, theme and what other people thought about the escape room. Each operator runs their own websites which can be made by cheap web agencies and makes it very difficult to find basic information. I made Discaper an easy to navigate escape room aggregator that focuses not only on details about escape room operators, but each individual escape room an operator runs."
      },
      img: "discaper.jpg",
      tagList: [SkillEnum.js, SkillEnum.react, SkillEnum.css3, SkillEnum.html5],
      url: {
        github: "",
        website: "https://www.discaper.com/"
      },
      releaseDate: "8th July 2019"
    },
    {
      id: "crypto-coaster",
      name: "Crypto Coaster",
      description: {
        overview:
          "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.",
        detailed:
          "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots."
      },
      img: "crypto-coaster.jpg",
      tagList: [SkillEnum.js, SkillEnum.websockets, SkillEnum.jquery],
      url: {
        github: "https://github.com/HarveyD/crypto-coaster",
        website: "https://www.harveydelaney.com/crypto-coaster/"
      },
      releaseDate: "16th Oct 2017"
    },
    {
      id: "kourty",
      name: "Kourty",
      description: {
        overview:
          "Kourty is the easiest way to find and book your favourite tennis courts in Australia! Find your closest or cheapest tennis court now using Kourty.",
        detailed:
          "Kourty is the easiest way to find and book your favourite tennis courts in Australia! Find your closest or cheapest tennis court now using Kourty."
      },
      img: "kourty.jpg",
      tagList: [SkillEnum.js, SkillEnum.react, SkillEnum.css3, SkillEnum.html5],
      url: {
        github: "",
        website: "https://www.kourty.com/"
      },
      releaseDate: "25th Dec 2018"
    },
    {
      id: "bruce-hall-vr-2",
      name: "Bruce Hall VR 2",
      description: {
        overview:
          "A virtual tour of the now demolished Bruce Hall. A second iteration of the project.",
        detailed: "A rebuild of the Bruce Hall VR project written in React."
      },
      img: "bruce-hall-vr-2.jpg",
      tagList: [SkillEnum.react, SkillEnum.panelleum],
      url: {
        github: "https://github.com/HarveyD/bruce-hall-vr-2",
        website: "https://www.harveydelaney.com/bruce-hall-vr-2"
      },
      releaseDate: "18th October 2018"
    },
    {
      id: "send-portfolio-template",
      name: "Seng Portfolio Template",
      description: {
        overview:
          "A configurable portfolio template for Software Engineers, allow people to display their skills, education and projects. Made using React and TypeScript.",
        detailed: `When I started working as a Software Engineer, I wanted to create my own (software engineering) portfolio website. I wanted it to display my experience, education, projects and skills. At the time, I wasn't so great at designing websites and looked around for a portfolio template which would help me get started. On Reddit, I found the devportfolio template by Ryan Fitzgerald.
        I loved the design, simplicity and customisability of it - it had everything I wanted in a template. So I build my portfolio using the template, which is still live.
        However, as time went on I wanted to add to the portfolio, I was restricted by how it was implemented. I found myself shoehorning new features into the project. So, I decided to create my own portfolio using a more modern stack: React, Typescript and Sass.`
      },
      img: "seng-portfolio.jpg",
      tagList: [SkillEnum.react, SkillEnum.ts, SkillEnum.html5, SkillEnum.sass],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio"
      },
      releaseDate: "18th October 2018"
    },
    {
      id: "reddit-sentiment-analyser",
      name: "Reddit Sentiment Analyser",
      description: {
        overview:
          "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
        detailed:
          "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread."
      },
      img: "reddit-sa.jpg",
      tagList: [SkillEnum.js, SkillEnum.sass, SkillEnum.jquery, SkillEnum.node],
      url: {
        github: "https://github.com/HarveyD/reddit-sa",
        website: "https://www.harveydelaney.com/reddit-sa/"
      },
      releaseDate: "1st April 2018"
    },
    {
      id: "compounding-savings",
      name: "Compounding Savings",
      description: {
        overview:
          "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.",
        detailed:
          "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items. A web application aimed at informing the potential compounding interest benefits from not buying non-essential items."
      },
      img: "compounding-savings.jpg",
      tagList: [
        SkillEnum.react,
        SkillEnum.redux,
        SkillEnum.sass,
        SkillEnum.webpack
      ],
      url: {
        github: "https://github.com/HarveyD/compounding-savings/",
        website: "https://www.harveydelaney.com/compounding-savings"
      },
      releaseDate: "20th May 2017"
    },
    {
      id: "pooplot",
      name: "PooPlot",
      description: {
        overview:
          "A hybrid mobile application to help people track, view and share poops.",
        detailed:
          "A hybrid mobile application to help people track, view and share poops. A hybrid mobile application to help people track, view and share poops."
      },
      img: "pooplot.jpg",
      tagList: [
        SkillEnum.angular2,
        SkillEnum.ionic,
        SkillEnum.android,
        SkillEnum.node,
        SkillEnum.mongodb
      ],
      url: {
        github: "",
        website: "https://www.harveydelaney.com/pooplot"
      },
      releaseDate: "6th August 2017"
    },
    {
      id: "repeat-after-me",
      name: "Repeat After Me",
      description: {
        overview:
          "A simple Simon Says clone made using HTML5 Canvas + Typescript.",
        detailed:
          "A simple Simon Says clone made using HTML5 Canvas + Typescript. A simple Simon Says clone made using HTML5 Canvas + Typescript."
      },
      img: "repeat-after-me.jpg",
      tagList: [SkillEnum.js, SkillEnum.ts, SkillEnum.webpack, SkillEnum.html5],
      url: {
        github: "https://github.com/HarveyD/repeatafterme",
        website: "https://www.harveydelaney.com/repeatafterme/"
      },
      releaseDate: "23rd July 2017"
    }
  ];

  public static readonly skillList: SkillEnum[] = Array.from(skillMap.entries())
    .filter(([, value]) => value.showAsDefault !== false)
    .map(([key]) => key);

  public static readonly socialIconList: ISocialIcon[] = [
    {
      id: "ln",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harvey-delaney-578150108/",
      icon: "fab fa-linkedin"
    },
    {
      id: "gh",
      name: "GitHub",
      url: "https://github.com/harveyd/",
      icon: "fab fa-github"
    },
    {
      id: "so",
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/7952076/harveyd",
      icon: "fab fa-stack-overflow"
    },
    {
      id: "bl",
      name: "Harvey's Blog",
      url: "https://blog.harveydelaney.com/",
      icon: "fa fa-bars"
    }
  ];
}

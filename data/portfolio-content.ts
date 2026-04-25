const blogUrl = "https://blog.harveydelaney.com/";
const email = "hello@harveydelaney.com";

export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  logo: string;
  logoAlt: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  tag: string;
};

export type WritingItem = {
  date: string;
  title: string;
  readTime?: string;
  href: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const portfolioContent = {
  site: {
    name: "Harvey Delaney",
    title: "Senior Front End Engineer",
    location: "Seattle, WA",
    description:
      "Senior Front End Engineer at Amazon Web Services based in Seattle, focused on front-end systems, product quality, and maintainable delivery.",
    canonicalUrl: "https://www.harveydelaney.com",
    blogUrl,
    email,
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavigationItem[],
  hero: {
    location: "Seattle, WA",
    rolePrefix: "Senior Front End Engineer at",
    company: "Amazon Web Services",
    primaryCta: { label: "See projects", href: "#projects" },
    secondaryCta: { label: "Read my blog", href: blogUrl },
    tertiaryCta: { label: "Get in touch", href: `mailto:${email}` },
  } satisfies {
    location: string;
    rolePrefix: string;
    company: string;
    primaryCta: HeroAction;
    secondaryCta: HeroAction;
    tertiaryCta: HeroAction;
  },
  about: {
    label: "01 / About",
    title: "A quick introduction.",
    image: "/images/harvey-patagonia.jpeg",
    imageAlt: "Harvey Delaney on a swing in Patagonia with mountains in the background.",
    paragraphs: [
      "Hey there! My name is Harvey Delaney. I'm currently working at Amazon Web Services in Seattle. I relocated from Sydney in October 2023, and was promoted to Senior Front End Engineer in July 2022.",
      "I'm a full-stack engineer with a strong preference for front-end development. I pride myself on writing clean, readable, testable and extensible code. Outside of work, I am always looking to learn new frameworks, libraries and programming languages. I also maintain a technical blog where I document my approach to solving technical problems I've encountered throughout my career.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "JavaScript",
      "Node",
      "Next.js",
      "HTML",
      "CSS",
      "Sass",
      "Angular",
      "C#",
      ".NET",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Webpack",
      "Jest",
    ],
  },
  experience: {
    label: "02 / Experience",
    title: "Where I've worked.",
    items: [
      {
        company: "Amazon Web Services",
        role: "Senior Front End Engineer",
        period: "July 2022 to Present",
        location: "Seattle, WA",
        summary:
          "Leading front-end architecture and design-system work on AWS console surfaces. Relocated from Sydney to Seattle in October 2023.",
        logo: "/images/logos/aws.jpg",
        logoAlt: "Amazon Web Services",
      },
      {
        company: "Amazon Web Services",
        role: "Front End Engineer II",
        period: "April 2020 to July 2022",
        location: "Sydney, AU",
        summary:
          "Shipped features across AWS console experiences; focused on accessibility, performance, and component-library contributions.",
        logo: "/images/logos/aws.jpg",
        logoAlt: "Amazon Web Services",
      },
      {
        company: "RateSetter",
        role: "Full Stack Software Engineer",
        period: "July 2018 to April 2020",
        location: "Sydney, AU",
        summary:
          "Uplifted the Wholesale platform, a fork of the Retail platform enabling institutional investors. .NET Core, React, Angular 2+, SQL Server.",
        logo: "/images/logos/rs.jpg",
        logoAlt: "RateSetter",
      },
      {
        company: "Commonwealth Bank of Australia",
        role: "Software Engineer",
        period: "Feb 2018 to July 2018",
        location: "Sydney, AU",
        summary: "Continued front-end and mobile work on branch-manager tooling.",
        logo: "/images/logos/cba.png",
        logoAlt: "Commonwealth Bank of Australia",
      },
      {
        company: "Commonwealth Bank of Australia",
        role: "Graduate Software Engineer",
        period: "Feb 2017 to Jan 2018",
        location: "Sydney, AU",
        summary:
          "Built a hybrid mobile app in Cordova, Angular 2+ and .NET that improved how branch managers sourced casual staff replacements.",
        logo: "/images/logos/cba.png",
        logoAlt: "Commonwealth Bank of Australia",
      },
      {
        company: "Department of Defence",
        role: "Junior Developer",
        period: "Mar 2016 to Nov 2016",
        location: "Canberra, AU",
        summary:
          "Part-time backend developer. SQL stored procedures and .NET APIs for internal clients.",
        logo: "/images/logos/dod.gif",
        logoAlt: "Department of Defence",
      },
    ] satisfies ExperienceItem[],
  },
  projects: {
    label: "03 / Projects",
    title: "Things I've built on the side.",
    items: [
      {
        title: "React Component Library",
        description:
          "A starter skeleton for building React component libraries with Rollup, Sass, TypeScript and Storybook.",
        image: "/images/projects/react-component-library.png",
        alt: "React Component Library",
        href: "https://blog.harveydelaney.com/creating-your-own-react-component-library/",
        tag: "Open source",
      },
      {
        title: "Discaper",
        description: "Find, book and discuss escape rooms across Australia.",
        image: "/images/projects/discaper.jpg",
        alt: "Discaper",
        href: "https://www.discaper.com/",
        tag: "Product",
      },
      {
        title: "Kourty",
        description: "The easiest way to find and book tennis courts in Australia.",
        image: "/images/projects/kourty.jpg",
        alt: "Kourty",
        href: "https://www.kourty.com/",
        tag: "Product",
      },
      {
        title: "Crypto Coaster",
        description: "Real-time crypto prices reimagined through their mascots.",
        image: "/images/projects/crypto-coaster.jpg",
        alt: "Crypto Coaster",
        href: "https://www.harveydelaney.com/crypto-coaster/",
        tag: "Experiment",
      },
      {
        title: "Bruce Hall VR 2",
        description: "A virtual tour of the now-demolished Bruce Hall. Second iteration.",
        image: "/images/projects/bruce-hall-vr-2.jpg",
        alt: "Bruce Hall VR 2",
        href: "https://www.harveydelaney.com/bruce-hall-vr-2",
        tag: "VR",
      },
      {
        title: "SENG Portfolio",
        description: "A configurable portfolio template for software engineers. React + TypeScript.",
        image: "/images/projects/seng-portfolio.jpg",
        alt: "SENG Portfolio",
        href: "https://www.harveydelaney.com/seng-portfolio",
        tag: "Template",
      },
      {
        title: "Reddit Sentiment Analyser",
        description: "Quickly summarise the positive / negative sentiment of a Reddit thread.",
        image: "/images/projects/reddit-sa.jpg",
        alt: "Reddit Sentiment Analyser",
        href: "https://www.harveydelaney.com/reddit-sa/",
        tag: "Tool",
      },
      {
        title: "Compounding Savings",
        description: "Web app that illustrates the compounding cost of non-essential purchases.",
        image: "/images/projects/compounding-savings.jpg",
        alt: "Compounding Savings",
        href: "https://www.harveydelaney.com/compounding-savings",
        tag: "Tool",
      },
      {
        title: "Repeat After Me",
        description: "A Simon Says clone built with HTML5 Canvas and TypeScript.",
        image: "/images/projects/repeat-after-me.jpg",
        alt: "Repeat After Me",
        href: "https://www.harveydelaney.com/repeatafterme/",
        tag: "Game",
      },
    ] satisfies ProjectItem[],
  },
  writing: {
    label: "04 / Writing",
    title: "Recent from the blog.",
    items: [
      {
        date: "Sep 2021",
        title: "Setting Up Automated Database (PostgreSQL) Backups Using Node.js and Bash",
        href: "https://blog.harveydelaney.com/setting-up-automated-database-postgresql-backups-using-node-js-and-bash/",
      },
      {
        date: "Aug 2020",
        title: "Creating your own Vue Component Library",
        href: "https://blog.harveydelaney.com/creating-your-own-vue-component-library/",
      },
      {
        date: "Apr 2020",
        title: "Creating your own mini Redux in React using useReducer, React Context and TypeScript",
        href: "https://blog.harveydelaney.com/creating-your-own-mini-redux-in-react/",
      },
      {
        date: "Nov 2019",
        title: "Creating a React Component Library using Rollup, Typescript, Sass and Storybook",
        readTime: "20 min read",
        href: "https://blog.harveydelaney.com/creating-your-own-react-component-library/",
      },
    ] satisfies WritingItem[],
    allPostsHref: blogUrl,
    ctaLabel: "Read my blog",
  },
  contact: {
    label: "05 / Contact",
    title: "Say hi.",
    intro:
      "The fastest way to reach me is email. I also read LinkedIn messages occasionally, and I lurk on GitHub and Stack Overflow.",
    methods: [
      {
        label: "Email",
        value: email,
        href: `mailto:${email}`,
      },
      {
        label: "LinkedIn",
        value: "harvey-delaney",
        href: "https://www.linkedin.com/in/harvey-delaney-578150108/",
      },
      {
        label: "GitHub",
        value: "@harveyd",
        href: "https://github.com/harveyd/",
      },
      {
        label: "Stack Overflow",
        value: "harveyd",
        href: "https://stackoverflow.com/users/7952076/harveyd",
      },
    ] satisfies ContactMethod[],
  },
  footer: {
    location: "Seattle, WA",
  },
} as const;
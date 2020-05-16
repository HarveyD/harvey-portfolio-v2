import * as React from "react";

import { SkillEnum } from "../../../constants";

import "./skill.scss";

interface IProps {
  skill: SkillEnum;
  size: string;
}

export interface ISkill {
  name: string;
  icon: string;
  faIcon?: string;
}

export const skillDict: Record<SkillEnum, ISkill> = {
  [SkillEnum.Html5]: { name: "HTML 5", icon: "html5" },
  [SkillEnum.CSS3]: { name: "CSS 3", icon: "css3" },
  [SkillEnum.SASS]: { name: "Sass", icon: "sass" },
  [SkillEnum.JavaScript]: { name: "JavaScript", icon: "javascript" },
  [SkillEnum.TypeScript]: { name: "TypeScript", icon: "typescript" },
  [SkillEnum.JQuery]: { name: "JQuery", icon: "jquery" },
  [SkillEnum.React]: { name: "React", icon: "react" },
  [SkillEnum.Redux]: { name: "Redux", icon: "", faIcon: "code" },
  [SkillEnum.Angular2]: { name: "Angular 2+", icon: "angularjs" },
  [SkillEnum.Jasmine]: { name: "Jasmine", icon: "jasmine" },
  [SkillEnum.Webpack]: { name: "Webpack", icon: "webpack" },
  [SkillEnum.Grunt]: { name: "Grunt", icon: "grunt" },
  [SkillEnum.Gulp]: { name: "Gulp", icon: "gulp" },
  [SkillEnum.Node]: { name: "Node", icon: "nodejs" },
  [SkillEnum.CSharp]: { name: "C#", icon: "csharp" },
  [SkillEnum.Java]: { name: "Java", icon: "java" },
  [SkillEnum.MongoDB]: { name: "Mongo DB", icon: "mongodb" },
  [SkillEnum.PostgreSQL]: { name: "PostgreSQL", icon: "postgresql" },
  [SkillEnum.GIT]: { name: "Git", icon: "git" },
  [SkillEnum.NGINX]: { name: "Nginx", icon: "nginx" },
  [SkillEnum.VisualStudio]: { name: "Visual Studio", icon: "visualstudio" },
  [SkillEnum.Android]: {
    name: "Android",
    icon: "android",
  },
  [SkillEnum.Ionic]: {
    name: "Ionic",
    icon: "",
    faIcon: "code",
  },
  [SkillEnum.Websockets]: {
    name: "Websockets",
    icon: "",
    faIcon: "plug",
  },
  [SkillEnum.Panelleum]: {
    name: "Panelleum",
    icon: "",
    faIcon: "columns",
  },
  [SkillEnum.Processing]: {
    name: "Processing",
    icon: "",
    faIcon: "code",
  },
};

const Skill: React.FunctionComponent<IProps> = ({ skill, size }) => {
  const skillDetails = skillDict[skill];

  if (!skillDetails) {
    return null;
  }

  const { name, icon, faIcon } = skillDetails;

  return (
    <div className={`skill-container ${size}`}>
      <i
        className={
          "icon " + (faIcon ? `fas fa-${faIcon}` : `devicon-${icon}-plain`)
        }
      />
      <span className="name">{name}</span>
    </div>
  );
};

export default Skill;

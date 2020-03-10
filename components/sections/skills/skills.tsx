import * as React from "react";

import Skill from "../../shared/skill/skill";
import { SkillEnum } from "../../../constants";

import "./skills.scss";

interface IProps {
  skillList: SkillEnum[];
}

const Skills: React.FunctionComponent<IProps> = ({ skillList }) => (
  <section className="section section-primary">
    <h2>Skills</h2>

    <div className="skills-container">
      {skillList.map((skill, i) => (
        <Skill key={i} skill={skill} size="large" />
      ))}
    </div>
  </section>
);

export default Skills;

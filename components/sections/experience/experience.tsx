import * as React from "react";

import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";

import "./experience.scss";

interface IProps {
  experienceList: IInfoCard[];
}

const Experience: React.FunctionComponent<IProps> = ({ experienceList }) => (
  <section id="experience" className="section section-secondary">
    <h2>Experience</h2>

    <div className="content-container experience-container">
      {experienceList.map((exp, i) => (
        <InfoCard key={i} cardDetails={exp} />
      ))}
    </div>
  </section>
);

export default Experience;

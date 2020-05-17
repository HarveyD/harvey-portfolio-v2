import * as React from "react";

import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";

import "./education.scss";

interface IProps {
  educationList: IInfoCard[];
}

const Education: React.FunctionComponent<IProps> = ({ educationList }) => (
  <section id="education" className="section section-primary">
    <h2>Education</h2>

    <div className="content-container education-container">
      {educationList.map((exp, i) => (
        <InfoCard key={i} cardDetails={exp} />
      ))}
    </div>
  </section>
);

export default Education;

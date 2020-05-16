import React from "react";

import "./info-card.scss";

interface IProps {
  cardDetails: IInfoCard;
}

export interface IInfoCard {
  logo: string;
  headings: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  description: string;
  isLast?: boolean;
}

const InfoCard: React.FC<IProps> = ({
  cardDetails: {
    logo,
    headings: { primary, secondary, tertiary },
    description,
    isLast,
  },
}) => (
  <div className={"info-card-container" + (isLast ? " last-card" : "")}>
    <div className="logo-container">
      <img src={`/images/logos/${logo}`} />
    </div>

    <div className="details-container">
      <h3>{primary}</h3>
      <h4>{secondary}</h4>
      <h5>{tertiary}</h5>
      <p>{description}</p>
    </div>
  </div>
);

export default InfoCard;

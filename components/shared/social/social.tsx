import React from "react";

import "./social.scss";

interface IProps {
  social: ISocialIcon;
}

export interface ISocialIcon {
  id: string;
  name: string;
  icon: string;
  url: string;
}

const SocialIcon: React.FC<IProps> = ({ social: { id, name, icon, url } }) => (
  <a href={url} className={`social-item-container ${id}`}>
    <div className="icon-container">
      <i className={`icon ${icon}`} />
    </div>
    <span className="name">{name}</span>
  </a>
);

export default SocialIcon;

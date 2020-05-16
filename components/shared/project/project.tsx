import React, { useCallback } from "react";

import { SkillEnum } from "../../../constants";

import "./project.scss";

interface IProps {
  projectDetails: IProject;
  projectClick: (projectId: string) => void;
}

export interface IUrl {
  github?: string;
  website?: string;
}

export interface IProject {
  id: string;
  name: string;
  description: {
    overview: string;
    detailed: string;
  };
  img: string;
  tagList: SkillEnum[];
  url: IUrl;
  releaseDate: string;
}

const Project: React.FC<IProps> = ({
  projectDetails: {
    id,
    name,
    description: { overview },
    img,
    url,
  },
  projectClick,
}) => {
  const onProjectClick = useCallback(() => {
    projectClick(id);
  }, [projectClick, id]);

  return (
    <div onClick={onProjectClick} className="project-container">
      <div className="heading">
        <div className="fa fa-circle red" />
        <div className="fa fa-circle yellow" />
        <div className="fa fa-circle green" />
        <a href={url.website} target="_blank">
          {name}
        </a>
      </div>
      <div className="body">
        <div className="overlay">
          <div className="description-container">{overview}</div>
        </div>

        <img className="project-image" src={`/images/projects/${img}`} />
      </div>
    </div>
  );
};

export default Project;

import * as React from "react";

import Project, { IProject } from "../../shared/project/project";
import ProjectModal from "../../shared/project-modal/project-modal";

import "./projects.scss";

interface IState {
  selectedProject?: IProject;
}

interface IProps {
  projectList: IProject[];
}

class Projects extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = { selectedProject: undefined };
  }

  public handleProjectClick = (projectId: string) => {
    this.setState({
      selectedProject: this.props.projectList.find(
        (project) => project.id === projectId
      ),
    });
  };

  public handleModalExit = () => {
    this.setState({ selectedProject: undefined });
  };

  public render() {
    const { projectList } = this.props;
    const { selectedProject } = this.state;

    return (
      <section id="projects" className="section section-secondary">
        <h2>Projects</h2>

        <div className="projects-container">
          {projectList.map((project) => (
            <Project
              key={project.id}
              projectDetails={project}
              projectClick={this.handleProjectClick}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            modalExitEvent={this.handleModalExit}
          />
        )}
      </section>
    );
  }
}

export default Projects;

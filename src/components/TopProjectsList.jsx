import React, { useContext } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { PROJECTS_ROUTE } from '../utils/routeNames';
import { ProjectsContext } from '../context/ProjectsContext';
import { useNavigate } from "react-router-dom";

export default function TopProjectsList() {
  const navigate = useNavigate();
  const projectsContext = useContext(ProjectsContext);

  const redirectToMoreProjects = () => {
    navigate(PROJECTS_ROUTE);
  };

  const isShowMoreButtonVisible = projectsContext.projects.length > 3;
  const articles = projectsContext.projects.slice(0, 3).map((project, index) => (
    <article key={index}>
      <h6>
        {project.name}
      </h6>
      <p>
        {project.description}
      </p>
    </article>
  ));

  return (
    <section>
      {projectsContext.isLoading && (
        <LoadingSpinner />
      )}
      {!projectsContext.isLoading && (
        <>
          <h3>Główne projekty</h3>
          {articles}
          {isShowMoreButtonVisible && (
            <button
              className='btn btn-primary d-inline-block'
              onClick={redirectToMoreProjects}
            >
              Pokaż więcej
            </button>
          )}
        </>
      )}
    </section>
  );
}

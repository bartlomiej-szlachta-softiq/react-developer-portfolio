import React, { useContext } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { ProjectsContext } from '../context/ProjectsContext';

export default function ProjectsList() {
  const projectsContext = useContext(ProjectsContext);

  const articles = projectsContext.projects.map((project, index) => (
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
          <h3>Projekty</h3>
          {articles}
        </>
      )}
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import ContactForm from './ContactForm';
import ProjectsList from './ProjectsList';
import TopProjectsList from './TopProjectsList';
import { ProjectsContext } from '../context/ProjectsContext';
import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from '../utils/routeNames';
import { getProjects } from '../actions/api';
import styles from './App.module.css';
import useAsyncAction from '../hooks/useAsyncAction';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [fetchProjects, isLoading] = useAsyncAction(getProjects);

  useEffect(
    () => {
      fetchProjects()
        .then((projects) => {
          setProjects(projects);
        });
    },
    [],
  );

  const projectsInfo = {
    projects,
    isLoading,
  };

  return (
    <ProjectsContext.Provider value={projectsInfo}>
      <div className={styles.container}>
        <Header
          name='Witold Śruta'
          position='Programista'
        />

        <Routes>
          <Route exact path={HOME_ROUTE} element={<TopProjectsList />} />
          <Route exact path={CONTACT_ROUTE} element={<ContactForm />} />
          <Route exact path={PROJECTS_ROUTE} element={<ProjectsList />} />
        </Routes>

      </div>
    </ProjectsContext.Provider>
  );
}

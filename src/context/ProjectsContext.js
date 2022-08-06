import React from 'react';

const defaultValue = {
  projects: [],
  isLoading: false,
};

export const ProjectsContext = React.createContext(defaultValue);

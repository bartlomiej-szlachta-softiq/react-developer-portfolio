const baseUrl = 'https://developer-portfolio-example-api-7est.vercel.app/api';

export const getProjects = () => {
  return fetch(baseUrl + '/projects')
    .then(response => response.json());
};

export const sendMessage = (email, text) => {
  return fetch(baseUrl + '/contact', {
    method: 'POST',
    body: JSON.stringify({
      email,
      text,
    }),
  })
    .then(response => response.json());
};

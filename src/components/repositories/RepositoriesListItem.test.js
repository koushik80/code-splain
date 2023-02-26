import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

// by adding Router Context
// solved act warning

function renderComponent() {
    const repository = {
      full_name: 'facebook/react',
      language: 'Javascript',
      description: 'A JS library',
      owner: 'facebook',
      name: 'react',
      html_ur: 'https://github.com/facebook/react'
    };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  };

test('shows a link to the github homepage for this repository', async() => {
  renderComponent();

  await screen.findByRole('img', { name: 'Javascript'});
});

/*
const pause = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 100)
  });
}
*/

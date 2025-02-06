import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders learn react link', async () => {
  await act(async () => {
    render(<App />);
  });

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

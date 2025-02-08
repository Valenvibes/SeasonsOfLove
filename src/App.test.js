import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start page correctly', async () => {
  render(<App />);
  const headingElement = await screen.findByText(/มาตามหาตัวตนกัน ว่าคุณเป็นหมาหรือแมวสายพันธ์ุใด?/i);
  const buttonElement = await screen.findByText(/ไปกันเลยยยย/i);
  expect(headingElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

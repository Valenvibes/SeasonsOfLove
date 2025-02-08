import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start page correctly', () => {
  render(<App />);
  const headingElement = screen.getByText(/มาตามหาตัวตนกัน ว่าคุณเป็นหมาหรือแมวสายพันธุ์ใด/i);
  const buttonElement = screen.getByText(/ไปกันเลยยย/i);
  expect(headingElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

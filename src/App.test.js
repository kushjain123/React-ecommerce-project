import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react ecommerce link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react ecommerce/i);
  expect(linkElement).toBeInTheDocument();
});

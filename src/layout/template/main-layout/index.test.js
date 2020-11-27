import { render, screen } from '@testing-library/react';
import MainLayout from '.';

test('renders learn react link', () => {
  render(<MainLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

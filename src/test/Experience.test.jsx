import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

describe('Experience component', () => {
  it('renders without crashing', () => {
    render(<Experience />);
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('Front-end developer / php programmer')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Web developer')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Feedback from '../components/Feedback';

describe('Feedback component', () => {
  it('renders without crashing', () => {
    const data = [
      { 
        id: 1, 
        feedback: 'Test feedback', 
        reporter: { name: 'Test Name', citeUrl: 'Test URL' } 
      },
    ];

    render(<Feedback data={data} />);
    
    expect(screen.getByText('Test feedback')).toBeInTheDocument();
    expect(screen.getByText('Test Name,')).toBeInTheDocument();
    expect(screen.getByText('Test URL')).toBeInTheDocument();
  });
});

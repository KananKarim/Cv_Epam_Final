import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("I'm a full-stack developer with a passion for creating web applications that excel in both form and function. I have experience in front-end development using HTML, CSS, and JavaScript, along with expertise in back-end technologies like Node.js. With a strong background in databases, version control, and a commitment to continuous learning, I'm dedicated to solving complex problems and building innovative solutions. My commitment to staying updated with the latest technologies and my problem-solving mindset drive me to tackle complex challenges with innovative solutions. If you're seeking a full-stack developer ready to contribute to exciting projects, I'm here and eager to collaborate. Let's turn creative ideas into functional, top-tier web experiences together.")).toBeInTheDocument();
  });
});
